<script lang="ts">
  import { convertUSDToIDR } from '$lib/utils'
  import { kebabCase, titleCase } from 'string-ts'

  export let product: App.Product
</script>

<a
  href="/{product.category}/{kebabCase(product.title)}"
  class="group transition duration-300 ease-in-out hover:-translate-y-1">
  <div
    class="card card-compact w-72 bg-base-100 shadow-lg group-hover:shadow-xl">
    <figure>
      <img src={product.thumbnail} alt={product.title} />
    </figure>
    <div class="card-body">
      <p class="truncate">{product.title}</p>
      <div class="mb-2 mt-4 flex items-center gap-2">
        <div>
          <p class="text-base font-semibold text-primary">
            {convertUSDToIDR(product.price, product.discountPercentage)}
          </p>
        </div>
        {#if product.discountPercentage >= 1}
          <div>
            <p class="line-through">{convertUSDToIDR(product.price)}</p>
          </div>
          <div class="badge badge-neutral">
            <p>{product.discountPercentage.toFixed(0)}%</p>
          </div>
        {/if}
      </div>
      <div class="flex items-center gap-1">
        {#each Array.from({ length: 5 }) as _, i}
          {#if i < Math.floor(product.rating)}
            <div class="mask mask-star-2 h-4 w-4 bg-warning" />
          {:else}
            <div class="mask mask-star-2 h-4 w-4 bg-neutral" />
          {/if}
        {/each}
      </div>
      <div class="card-actions mt-4 justify-end">
        {#each product.tags as tag}
          <div class="badge badge-neutral">
            <p>{titleCase(tag)}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</a>
