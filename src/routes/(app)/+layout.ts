import type { LayoutLoad } from './$types'

export const load = (async ({ fetch }) => {
  try {
    const response = await fetch('https://dummyjson.com/products/categories')
    const categories: App.Categories[] = await response.json()

    return {
      categories,
    }
  } catch (error) {
    console.error(error)

    return {
      categories: [],
    }
  }
}) satisfies LayoutLoad
