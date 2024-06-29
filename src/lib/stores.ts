import { applyDiscount, localStorageWritable } from '$lib/utils'
import { derived } from 'svelte/store'

export const cart = localStorageWritable<App.Product[]>('cart', [])

export const totalPrice = derived<typeof cart, number>(cart, ($cart) => {
  return $cart.reduce((prev, curr) => {
    const discountedPrice = applyDiscount(curr.price, curr.discountPercentage)

    return prev + discountedPrice
  }, 0)
})
