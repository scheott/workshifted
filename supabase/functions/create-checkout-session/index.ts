// supabase/functions/create-checkout-session/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Stripe from 'https://esm.sh/stripe@14.21.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get Stripe secret from environment
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY')
    if (!stripeKey) {
      throw new Error('STRIPE_SECRET_KEY not found in environment')
    }

    // Initialize Stripe
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
    })

    // Get request data
    const { userId, userEmail, productName, price, currency, successUrl, cancelUrl } = await req.json()

    if (!userId || !userEmail) {
      throw new Error('Missing required fields: userId, userEmail')
    }

    console.log('Creating checkout session for:', { userId, userEmail, price })

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency || 'usd',
            product_data: {
              name: productName || 'WorkShifted Premium Plan',
              description: 'Complete career transition plan with courses, certifications, and local opportunities'
            },
            unit_amount: price || 2900, // $29.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl?.includes('session_id') 
        ? successUrl 
        : `${successUrl || req.headers.get('origin') + '/payment/success'}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${req.headers.get('origin')}/payment/cancel`,
      metadata: {
        userId: userId,
        userEmail: userEmail,
      },
    })

    console.log('Checkout session created:', {
      id: session.id,
      url: session.url,
      success_url: session.success_url
    })

    return new Response(
      JSON.stringify({ 
        id: session.id,
        url: session.url,
        success: true 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Error creating checkout session:', error)
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})