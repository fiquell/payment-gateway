import type { PageLoad } from './$types'

export const load = (async ({ fetch, params }) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${params.category}`
    )
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
