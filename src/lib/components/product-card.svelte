<script lang="ts">
  import { cart } from '$lib/stores'
  import { applyDiscount, formatIDR } from '$lib/utils'
  import { ShoppingCart } from 'lucide-svelte'

  export let product: App.Product

  const addToCart = (product: App.Product) => {
    cart.update((items) => {
      if (items.find((item) => item.id === product.id)) {
        return [...items]
      }

      const { title, ...details } = product

      return [
        ...items,
        {
          ...details,
          price: Math.round(
            applyDiscount(product.price, product.discountPercentage)
          ),
          name: title,
          quantity: 1,
        },
      ]
    })
  }
</script>

<div class="card card-compact w-72">
  <figure class="rounded-2xl bg-base-100">
    <img src={product.thumbnail} alt={product.title} />
  </figure>
  <div class="card-body">
    <p class="truncate font-semibold">{product.title}</p>
    <div class="mb-1 mt-2 flex items-center gap-2">
      <div>
        <p class="font-semibold text-primary">
          {formatIDR(applyDiscount(product.price, product.discountPercentage))}
        </p>
      </div>
      {#if product.discountPercentage >= 1}
        <div>
          <p class="line-through opacity-80">
            {formatIDR(product.price)}
          </p>
        </div>
        <div>
          <p class="badge badge-neutral">
            {Math.round(product.discountPercentage)}%
          </p>
        </div>
      {/if}
    </div>
    <div class="flex items-center gap-1">
      {#each Array.from({ length: 5 }) as _, i}
        {#if i < Math.round(product.rating)}
          <div class="mask mask-star-2 h-4 w-4 bg-warning" />
        {:else}
          <div class="mask mask-star-2 h-4 w-4 bg-neutral" />
        {/if}
      {/each}
    </div>
    <div class="card-actions mt-4">
      <button class="btn btn-primary" on:click={() => addToCart(product)}>
        <ShoppingCart size={16} />
        <span>Add To Cart</span>
      </button>
    </div>
  </div>
</div>
