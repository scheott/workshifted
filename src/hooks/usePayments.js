// src/hooks/usePayments.js
import { useState, useCallback } from 'react';
import { createCheckoutSession, redirectToCheckout, verifyPayment } from '../lib/stripe';
import { supabase } from '../lib/supabase';

export const usePayments = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const initiatePayment = useCallback(async (userId, userEmail) => {
    if (!userId || !userEmail) {
      throw new Error('User information is required');
    }

    setLoading(true);
    setError('');

    try {
      console.log('Initiating payment for:', { userId, userEmail });
      
      // Create checkout session
      const session = await createCheckoutSession(userId, userEmail);
      
      if (!session?.id) {
        throw new Error('Failed to create payment session');
      }

      console.log('Checkout session created:', session);

      // Redirect to Stripe Checkout
      await redirectToCheckout(session.id);
      
      return true;
    } catch (err) {
      console.error('Payment initiation error:', err);
      setError(err.message || 'Payment failed to start');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const handlePaymentSuccess = useCallback(async (sessionId, userId) => {
    if (!sessionId || !userId) {
      throw new Error('Session ID and User ID are required');
    }

    setLoading(true);
    setError('');

    try {
      console.log('Handling payment success:', { sessionId, userId });
      
      // Verify payment with Stripe
      console.log('=== Payment Verification Debug ===');
      console.log('Verifying payment with session ID:', sessionId);
      console.log('Session ID type:', typeof sessionId);
      console.log('Session ID length:', sessionId?.length);
      console.log('Session ID value (JSON):', JSON.stringify(sessionId));
      
      const paymentResult = await verifyPayment(sessionId);
      
      console.log('Payment verification response:', paymentResult);
      console.log('=== End Verification Debug ===');
      
      if (!paymentResult.success) {
        throw new Error(paymentResult.error || 'Payment verification failed');
      }

      console.log('Payment verified successfully:', paymentResult);

      // Update user profile in Supabase
      console.log('Updating user profile for user:', userId);
      const { data: updateData, error: updateError } = await supabase
        .from('user_profiles')
        .update({
          subscription_status: 'premium',
          stripe_customer_id: paymentResult.customer_id,
          payment_date: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('user_id', userId)
        .select(); // Add select to see what was updated

      if (updateError) {
        console.error('Database update error details:', updateError);
        console.error('Update error code:', updateError.code);
        console.error('Update error message:', updateError.message);
        console.error('Update error details:', updateError.details);
        throw new Error(`Database error: ${updateError.message}`);
      }

      console.log('User profile update result:', updateData);
      
      if (!updateData || updateData.length === 0) {
        console.error('No rows were updated. User might not exist in user_profiles table.');
        throw new Error('No user profile found to update');
      }

      console.log('User profile updated to premium successfully');

      // Log the successful payment activity
      await supabase
        .from('user_activity_log')
        .insert({
          user_id: userId,
          activity_type: 'premium_upgrade',
          activity_data: {
            payment_amount: 2900, // $29.00 in cents
            stripe_session_id: sessionId,
            upgrade_date: new Date().toISOString(),
            mock_payment: true // Flag to indicate this was a mock payment
          }
        });

      console.log('Activity logged successfully');

      return true;
    } catch (err) {
      console.error('Payment success handling error:', err);
      setError(err.message || 'Failed to activate premium features');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const checkPaymentStatus = useCallback(async (userId) => {
    try {
      const { data: profile, error } = await supabase
        .from('user_profiles')
        .select('subscription_status, stripe_customer_id, payment_date')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.error('Error checking payment status:', error);
        return { isPremium: false, error: error.message };
      }

      const isPremium = profile?.subscription_status === 'premium';
      
      return {
        isPremium,
        subscriptionStatus: profile?.subscription_status,
        customerId: profile?.stripe_customer_id,
        paymentDate: profile?.payment_date,
        error: null
      };
    } catch (err) {
      console.error('Payment status check error:', err);
      return { isPremium: false, error: err.message };
    }
  }, []);

  return {
    loading,
    error,
    initiatePayment,
    handlePaymentSuccess,
    checkPaymentStatus,
    clearError: () => setError('')
  };
};