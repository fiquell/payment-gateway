import type { PageServerLoad } from './$types'

export const load = (async () => {
  const response = await fetch('https://dummyjson.com/products?limit=28')
  const dummyjson: App.DummyJSON = await response.json()

  return {
    dummyjson,
  }
}) satisfies PageServerLoad
