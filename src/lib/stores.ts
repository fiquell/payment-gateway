import { applyDiscount, localStorageWritable } from '$lib/utils'
import { derived } from 'svelte/store'

export const cart = localStorageWritable<App.Cart[]>('cart', [])

export const totalPrice = derived<typeof cart, number>(cart, ($cart) => {
  return $cart.reduce((prev, curr) => {
    const discountedPrice = applyDiscount(curr.price, curr.discountPercentage)

    return prev + curr.quantity * discountedPrice
  }, 0)
})
