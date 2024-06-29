<script lang="ts">
  import { cart } from '$lib/stores'
  import { applyDiscount, cn, formatIDR } from '$lib/utils'
  import { Minus, Plus } from 'lucide-svelte'

  const handleQuantityChange = (event: Event, item: App.Cart) => {
    const input = event.target as HTMLInputElement
    const quantity = Math.min(Math.max(parseInt(input.value, 10), 1), 16)

    item.quantity = quantity

    return cart.update((items) => items)
  }

  const removeFromCart = (product: App.Cart) => {
    return cart.update((items) => {
      return items.filter((item) => item.id !== product.id)
    })
  }
</script>

<section>
  {#if $cart.length}
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>Products</th>
            <th>Quantity</th>
            <th>Total Prices</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each $cart as item}
            <tr>
              <td>
                <div class="flex items-center gap-4">
                  <div class="avatar">
                    <div class="w-16 rounded-2xl bg-base-100">
                      <img src={item.thumbnail} alt={item.name} />
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold">{item.name}</p>
                    <p class="opacity-80">{item.returnPolicy}</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="flex items-center gap-1">
                  <button
                    class={cn(
                      'btn btn-square btn-neutral btn-sm',
                      item.quantity === 1 && 'btn-disabled'
                    )}
                    on:click={() => item.quantity > 1 && item.quantity--}>
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    class="input input-sm input-bordered w-12 text-center"
                    on:change={(event) => handleQuantityChange(event, item)} />
                  <button
                    class={cn(
                      'btn btn-square btn-neutral btn-sm',
                      item.quantity === 16 && 'btn-disabled'
                    )}
                    on:click={() => item.quantity < 16 && item.quantity++}>
                    <Plus size={16} />
                  </button>
                </div>
              </td>
              <td>
                <p class="font-semibold text-primary">
                  {formatIDR(
                    applyDiscount(item.price, item.discountPercentage)
                  )}
                </p>
              </td>
              <td>
                <button
                  class="btn btn-error btn-sm"
                  on:click={() => removeFromCart(item)}>
                  Delete
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <div class="mt-40 flex flex-col items-center gap-4">
      <p class="text-2xl font-semibold">Your shopping cart is empty</p>
      <a href="/" class="btn btn-primary btn-wide">Continue shopping</a>
    </div>
  {/if}
</section>
