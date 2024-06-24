import { convertUSDToIDR } from '$lib/utils'
import { derived, writable } from 'svelte/store'

export const cart = writable<App.Product[]>([])

export const totalPrice = derived<typeof cart, number>(cart, ($cart) => {
  return $cart.reduce((prev, curr) => {
    const discountedPrice = convertUSDToIDR(
      curr.price,
      curr.discountPercentage,
      false
    ) as number
    return prev + discountedPrice
  }, 0)
})
