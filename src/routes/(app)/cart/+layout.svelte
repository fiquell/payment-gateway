<script lang="ts">
  import { cart, snap, totalPrice } from '$lib/stores'
  import { cn, formatIDR } from '$lib/utils'

  const handleCheckout = async () => {
    const response = await fetch('/api/create-transaction', {
      method: 'POST',
      body: JSON.stringify({
        gross_amount: $totalPrice,
        item_details: $cart,
      }),
    })
    const { createTransaction } = await response.json()

    snap.set(true)

    return window.snap.embed(createTransaction.token, {
      embedId: 'snap-container',
    })
  }
</script>

<div class="flex items-start gap-4">
  <div class="w-full">
    <slot />
  </div>
  {#if $cart.length}
    <div class="w-1/2 space-y-4">
      <div class="flex items-center justify-between font-semibold">
        <p class="text-sm">Total ({$cart.length} item):</p>
        <p class="text-primary">{formatIDR($totalPrice)}</p>
      </div>
      <button
        class={cn('btn btn-primary btn-wide', $snap && 'btn-disabled')}
        on:click={handleCheckout}>
        Checkout
      </button>
      <div id="snap-container" class="w-full rounded-2xl" />
    </div>
  {/if}
</div>
