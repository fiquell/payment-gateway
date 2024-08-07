import { convertUSDToIDR } from '$lib/utils'
import type { PageLoad } from './$types'

export const load = (async ({ fetch, params }) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${params.category}`
    )
    const dummyjson: App.DummyJSON = await response.json()

    const products = dummyjson.products.map(({ price, ...details }) => ({
      ...details,
      price: convertUSDToIDR(price),
    }))

    return {
      products,
    }
  } catch (error) {
    console.error(error)

    return {
      products: [],
    }
  }
}) satisfies PageLoad
