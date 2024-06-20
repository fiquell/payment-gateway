<script lang="ts">
  import ProductCard from '$lib/components/product-card.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<section class="flex flex-wrap justify-end gap-2">
  {#each data.products as product}
    <ProductCard {product} />
  {/each}
</section>
