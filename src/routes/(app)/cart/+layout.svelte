<script lang="ts">
  import { cart, totalPrice } from '$lib/stores'
  import { formatIDR } from '$lib/utils'
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
      <button class="btn btn-primary btn-wide">Checkout</button>
    </div>
  {/if}
</div>
