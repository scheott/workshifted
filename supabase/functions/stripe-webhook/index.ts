import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@14.21.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
})

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

const cryptoProvider = Stripe.createSubtleCryptoProvider()

serve(async (request) => {
  const signature = request.headers.get('Stripe-Signature')
  const body = await request.text()
  const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')

  let event: Stripe.Event

  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      signature!,
      webhookSecret!,
      undefined,
      cryptoProvider
    )
  } catch (err) {
    console.error(`Webhook signature verification failed.`, err.message)
    return new Response(`Webhook signature verification failed.`, { status: 400 })
  }

  console.log(`🔔 Received event: ${event.type}`)

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.metadata?.userId

        if (!userId) {
          console.error('No userId found in session metadata')
          break
        }

        // Update user profile to premium
        const { error: updateError } = await supabase
          .from('user_profiles')
          .update({
            subscription_status: 'premium',
            stripe_customer_id: session.customer,
            payment_date: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
          .eq('user_id', userId)

        if (updateError) {
          console.error('Error updating user profile:', updateError)
          throw updateError
        }

        // Log the payment activity
        const { error: activityError } = await supabase
          .from('user_activity_log')
          .insert({
            user_id: userId,
            activity_type: 'premium_upgrade',
            activity_data: {
              payment_amount: session.amount_total,
              stripe_session_id: session.id,
              stripe_customer_id: session.customer,
              upgrade_date: new Date().toISOString()
            }
          })

        if (activityError) {
          console.error('Error logging activity:', activityError)
        }

        console.log(`✅ Premium upgrade completed for user: ${userId}`)
        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        const userId = paymentIntent.metadata?.userId

        if (userId) {
          // Log failed payment
          await supabase
            .from('user_activity_log')
            .insert({
              user_id: userId,
              activity_type: 'payment_failed',
              activity_data: {
                payment_intent_id: paymentIntent.id,
                failure_reason: paymentIntent.last_payment_error?.message,
                failed_at: new Date().toISOString()
              }
            })
        }

        console.log(`❌ Payment failed for user: ${userId}`)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }
  } catch (error) {
    console.error(`Error processing webhook event: ${error.message}`)
    return new Response(`Webhook handler failed: ${error.message}`, { status: 500 })
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  })
})
