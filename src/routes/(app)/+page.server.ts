import type { PageServerLoad } from './$types'

export const load = (async () => {
  const response = await fetch('https://dummyjson.com/products?limit=28')
  const products: App.DummyJSON = await response.json()

  return {
    products,
  }
}) satisfies PageServerLoad
