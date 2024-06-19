<script lang="ts">
  import { page } from '$app/stores'
  import SiteAside from '$lib/components/site-aside.svelte'
  import SiteHeader from '$lib/components/site-header.svelte'
  import type { LayoutData } from './$types'

  export let data: LayoutData

  const categories = Array.from(
    new Set(data.products.products.map((product) => product.category))
  )

  let shouldShowAside: boolean

  $: {
    const path = $page.url.pathname
    const isHome = path === '/'
    const isCategory = categories.includes(path.slice(1))

    shouldShowAside = isHome || isCategory

    console.log('path:', path)
    console.log('isHome:', isHome)
    console.log('isCategory:', isCategory)
  }

  console.log('categories:', categories)
</script>

<SiteHeader />
<div class="container my-24 flex items-start gap-4">
  {#if shouldShowAside}
    <SiteAside {categories} />
  {/if}
  <main class="w-screen">
    <slot />
  </main>
</div>
