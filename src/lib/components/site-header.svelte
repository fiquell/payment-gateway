<script lang="ts">
  import { cart } from '$lib/stores'
  import { ShoppingCart, User } from 'lucide-svelte'
</script>

<header class="container navbar absolute right-1/2 top-0 translate-x-1/2">
  <div class="navbar-start">
    <a href="/" class="btn btn-square btn-ghost text-xl">🔥</a>
  </div>
  <div class="navbar-end space-x-2">
    <a href="/cart" class="btn btn-square btn-ghost">
      {#if $cart.length}
        <div class="indicator">
          <ShoppingCart />
          <p class="badge indicator-item badge-primary badge-sm">
            {$cart.length}
          </p>
        </div>
      {:else}
        <ShoppingCart />
      {/if}
    </a>
    <a href="/user" class="btn btn-square btn-ghost">
      <User />
    </a>
  </div>
</header>
