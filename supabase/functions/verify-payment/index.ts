// supabase/functions/verify-payment/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Stripe from 'https://esm.sh/stripe@14.21.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get Stripe secret from environment
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY')
    if (!stripeKey) {
      console.error('STRIPE_SECRET_KEY not found in environment')
      throw new Error('STRIPE_SECRET_KEY not configured')
    }

    // Initialize Stripe
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
    })

    // Get request data
    const body = await req.json()
    console.log('Verify payment request body:', body)
    
    const { sessionId } = body
    
    if (!sessionId) {
      console.error('Missing sessionId in request:', body)
      throw new Error('Session ID is required')
    }

    console.log('Verifying payment for session:', sessionId)

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    
    console.log('Session retrieved:', {
      id: session.id,
      payment_status: session.payment_status,
      customer: session.customer,
      amount_total: session.amount_total
    })

    // Check if payment was successful
    if (session.payment_status !== 'paid') {
      console.error('Payment not completed:', session.payment_status)
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Payment status: ${session.payment_status}` 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      )
    }

    // Return success result
    const result = {
      success: true,
      customer_id: session.customer,
      amount_paid: session.amount_total,
      status: 'complete',
      session_id: sessionId
    }

    console.log('Payment verification successful:', result)

    return new Response(
      JSON.stringify(result),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Payment verification error:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})