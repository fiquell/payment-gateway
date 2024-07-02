<script lang="ts">
  import { PUBLIC_CLIENT_KEY } from '$env/static/public'
  import { cart, totalPrice } from '$lib/stores'
  import { formatIDR } from '$lib/utils'

  const handleCheckout = async () => {
    const response = await fetch('/api/create-transaction', {
      method: 'POST',
      body: JSON.stringify({
        gross_amount: $totalPrice,
        item_details: $cart,
      }),
    })
    const { createTransaction } = await response.json()

    return window.snap.pay(createTransaction.token, {
      onSuccess: () => {
        console.log('onSuccess')
      },
      onPending: () => {
        console.log('onPending')
      },
      onError: () => {
        console.log('onError')
      },
      onClose: () => {
        console.log('onClose')
      },
    })
  }
</script>

<svelte:head>
  <script
    src="https://app.sandbox.midtrans.com/snap/snap.js"
    data-client-key={PUBLIC_CLIENT_KEY}></script>
</svelte:head>

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
      <button class="btn btn-primary btn-wide" on:click={handleCheckout}>
        Checkout
      </button>
    </div>
  {/if}
</div>
