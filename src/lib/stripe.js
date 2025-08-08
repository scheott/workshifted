// src/lib/stripe.js
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;

// Stripe configuration
export const STRIPE_CONFIG = {
  // One-time payment product details
  PREMIUM_PLAN: {
    name: 'WorkShifted Premium Plan',
    price: 2900, // $29.00 in cents
    currency: 'usd',
    description: 'Complete career transition plan with courses, certifications, and local opportunities'
  },
  
  // Payment success/cancel URLs
  SUCCESS_URL: `${window.location.origin}/payment/success`,
  CANCEL_URL: `${window.location.origin}/payment/cancel`,
};

// Create checkout session
export const createCheckoutSession = async (userId, userEmail) => {
  try {
    const response = await fetch('https://yckdevlhfhcnuktuzrcf.supabase.co/functions/v1/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        userEmail,
        productName: STRIPE_CONFIG.PREMIUM_PLAN.name,
        price: STRIPE_CONFIG.PREMIUM_PLAN.price,
        currency: STRIPE_CONFIG.PREMIUM_PLAN.currency,
        successUrl: STRIPE_CONFIG.SUCCESS_URL,
        cancelUrl: STRIPE_CONFIG.CANCEL_URL,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

// Redirect to Stripe Checkout
export const redirectToCheckout = async (sessionId) => {
  const stripe = await getStripe();
  
  const { error } = await stripe.redirectToCheckout({
    sessionId: sessionId,
  });

  if (error) {
    console.error('Stripe redirect error:', error);
    throw error;
  }
};

// Verify payment status
export const verifyPayment = async (sessionId) => {
  try {
    const response = await fetch(`/api/verify-payment?session_id=${sessionId}`);
    
    if (!response.ok) {
      throw new Error('Failed to verify payment');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
};