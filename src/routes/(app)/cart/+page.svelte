<script lang="ts">
  import { cart } from '$lib/stores'
  import { convertUSDToIDR } from '$lib/utils'

  const removeFromCart = (product: App.Product) => {
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
                      <img src={item.thumbnail} alt={item.title} />
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold">{item.title}</p>
                    <p class="opacity-80">{item.returnPolicy}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="font-semibold text-primary">
                  {convertUSDToIDR(item.price, item.discountPercentage)}
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
      <a href="/" class="btn btn-outline btn-primary">Continue shopping</a>
    </div>
  {/if}
</section>
