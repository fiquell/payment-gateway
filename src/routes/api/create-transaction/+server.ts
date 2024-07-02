import { SERVER_KEY } from '$env/static/private'
import { PUBLIC_CLIENT_KEY } from '$env/static/public'
import { json } from '@sveltejs/kit'
import midtransClient from 'midtrans-client'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
  return json({ success: true })
}

export const POST: RequestHandler = async ({ request }) => {
  const { gross_amount, item_details } = await request.json()

  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: SERVER_KEY,
    clientKey: PUBLIC_CLIENT_KEY,
  })

  const parameter = {
    transaction_details: {
      order_id: Math.round(new Date().getTime() / 1000),
      gross_amount,
    },
    credit_card: {
      secure: true,
    },
    item_details,
    customer_details: {
      first_name: 'Emily',
      last_name: 'Johnson',
      email: 'emily.johnson@x.dummyjson.com',
      phone: '+81 965-431-3024',
    },
  }

  const createTransaction = await snap.createTransaction(parameter)

  return json({ createTransaction })
}
