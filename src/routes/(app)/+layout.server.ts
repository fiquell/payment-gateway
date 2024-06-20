import type { LayoutServerLoad } from './$types'

export const load = (async ({ fetch }) => {
  const response = await fetch('https://dummyjson.com/products/categories')
  const categories: App.Categories[] = await response.json()

  return {
    categories,
  }
}) satisfies LayoutServerLoad
