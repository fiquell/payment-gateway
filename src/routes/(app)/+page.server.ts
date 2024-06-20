import type { PageServerLoad } from './$types'

export const load = (async ({ fetch }) => {
  const response = await fetch('https://dummyjson.com/products?limit=28')
  const dummyjson: App.DummyJSON = await response.json()

  return {
    products: dummyjson.products,
  }
}) satisfies PageServerLoad
