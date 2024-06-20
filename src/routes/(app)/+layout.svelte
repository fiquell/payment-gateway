<script lang="ts">
  import { page } from '$app/stores'
  import SiteAside from '$lib/components/site-aside.svelte'
  import SiteHeader from '$lib/components/site-header.svelte'
  import type { LayoutData } from './$types'

  export let data: LayoutData

  let shouldShowAside: boolean

  $: {
    const path = $page.url.pathname
    const slug = data.categories.map((category) => category.slug)

    const isHome = path === '/'
    const isCategory = slug.includes(path.slice(1))

    shouldShowAside = isHome || isCategory

    console.log('path:', path)
    console.log('slug:', slug)
    console.log('isHome:', isHome)
    console.log('isCategory:', isCategory)
  }
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
