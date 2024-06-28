import type { PageLoad } from './$types'

export const load = (async ({ fetch }) => {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=28')
    const dummyjson: App.DummyJSON = await response.json()

    return {
      products: dummyjson.products,
    }
  } catch (error) {
    console.error(error)

    return {
      products: [],
    }
  }
}) satisfies PageLoad
