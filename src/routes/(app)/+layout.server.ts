import type { LayoutServerLoad } from './$types'

export const load = (async () => {
  const response = await fetch('https://dummyjson.com/products/categories')
  const categories: App.Categories[] = await response.json()

  return {
    categories,
  }
}) satisfies LayoutServerLoad
