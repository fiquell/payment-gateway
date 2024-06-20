<script lang="ts">
  import { page } from '$app/stores'
  import SiteAside from '$lib/components/site-aside.svelte'
  import SiteHeader from '$lib/components/site-header.svelte'
  import type { LayoutData } from './$types'

  export let data: LayoutData

  const categorySlug = Array.from(
    new Set(data.categories.map((category) => category.slug))
  )

  let shouldShowAside: boolean

  $: {
    const path = $page.url.pathname
    const isHome = path === '/'
    const isCategory = categorySlug.includes(path.slice(1))

    shouldShowAside = isHome || isCategory

    console.log('path:', path)
    console.log('isHome:', isHome)
    console.log('isCategory:', isCategory)
  }

  console.log('data.categories:', data.categories)
  console.log('categorySlug:', categorySlug)
</script>

<SiteHeader />
<div class="container my-24 flex items-start gap-4">
  {#if shouldShowAside}
    <SiteAside categories={data.categories} />
  {/if}
  <main class="w-screen">
    <slot />
  </main>
</div>
