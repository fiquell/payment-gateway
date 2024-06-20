import type { PageServerLoad } from './$types'

export const load = (async ({ fetch, params }) => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${params.category}`
  )
  const dummyjson: App.DummyJSON = await response.json()

  return {
    products: dummyjson.products,
  }
}) satisfies PageServerLoad
