import { localStorageWritable } from '$lib/utils'
import { derived } from 'svelte/store'

export const cart = localStorageWritable<App.Cart[]>('cart', [])

export const totalPrice = derived<typeof cart, number>(cart, ($cart) => {
  return $cart.reduce((prev, curr) => {
    return prev + curr.quantity * curr.price
  }, 0)
})
