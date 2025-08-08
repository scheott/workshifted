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
      // Create checkout session
      const session = await createCheckoutSession(userId, userEmail);
      
      if (!session?.id) {
        throw new Error('Failed to create payment session');
      }

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
      // Verify payment with Stripe
      const paymentResult = await verifyPayment(sessionId);
      
      if (!paymentResult.success) {
        throw new Error('Payment verification failed');
      }

      // Update user profile in Supabase
      const { error: updateError } = await supabase
        .from('user_profiles')
        .update({
          subscription_status: 'premium',
          stripe_customer_id: paymentResult.customer_id,
          payment_date: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('user_id', userId);

      if (updateError) {
        console.error('Error updating user profile:', updateError);
        throw new Error('Failed to activate premium features');
      }

      // Log the successful payment activity
      await supabase
        .from('user_activity_log')
        .insert({
          user_id: userId,
          activity_type: 'premium_upgrade',
          activity_data: {
            payment_amount: 2900, // $29.00 in cents
            stripe_session_id: sessionId,
            upgrade_date: new Date().toISOString()
          }
        });

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

  const requestRefund = useCallback(async (userId, reason = '') => {
    setLoading(true);
    setError('');

    try {
      // Get user's payment information
      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('stripe_customer_id, payment_date')
        .eq('user_id', userId)
        .single();

      if (profileError || !profile?.stripe_customer_id) {
        throw new Error('No payment information found');
      }

      // Check if eligible for refund (within 30 days)
      const paymentDate = new Date(profile.payment_date);
      const daysSincePayment = (new Date() - paymentDate) / (1000 * 60 * 60 * 24);
      
      if (daysSincePayment > 30) {
        throw new Error('Refund period has expired (30 days)');
      }

      // Request refund through backend API
      const response = await fetch('/api/request-refund', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          customerId: profile.stripe_customer_id,
          reason
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to process refund request');
      }

      const result = await response.json();
      
      if (result.success) {
        // Update user profile to reflect refund
        await supabase
          .from('user_profiles')
          .update({
            subscription_status: 'refunded',
            updated_at: new Date().toISOString()
          })
          .eq('user_id', userId);

        // Log the refund activity
        await supabase
          .from('user_activity_log')
          .insert({
            user_id: userId,
            activity_type: 'refund_processed',
            activity_data: {
              refund_amount: 2900,
              refund_reason: reason,
              refund_date: new Date().toISOString()
            }
          });
      }

      return result;
    } catch (err) {
      console.error('Refund request error:', err);
      setError(err.message || 'Failed to process refund request');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    initiatePayment,
    handlePaymentSuccess,
    checkPaymentStatus,
    requestRefund,
    clearError: () => setError('')
  };
};