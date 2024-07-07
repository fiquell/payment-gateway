import { localStorageWritable } from '$lib/utils'
import { derived, writable } from 'svelte/store'

export const cart = localStorageWritable<App.Cart[]>('cart', [])
export type Cart = typeof cart

export const totalPrice = derived<typeof cart, number>(cart, ($cart) => {
  return $cart.reduce((prev, curr) => {
    return prev + curr.quantity * curr.price
  }, 0)
})
export type TotalPrice = typeof totalPrice

export const snap = writable<boolean>(false)
export type Snap = typeof snap
