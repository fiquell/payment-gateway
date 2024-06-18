import type { PageServerLoad } from './$types'

export const load = (async () => {
  const response = await fetch('https://dummyjson.com/products')
  const products: App.DummyJSON = await response.json()

  return {
    products,
  }
}) satisfies PageServerLoad
