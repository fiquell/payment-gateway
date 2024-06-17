<script lang="ts">
  import { ShoppingCart, User } from 'lucide-svelte'
</script>

<header
  class="container navbar absolute right-1/2 top-0 translate-x-1/2 bg-base-100">
  <div class="navbar-start">
    <a href="/" class="btn btn-square btn-ghost text-xl">🔥</a>
  </div>
  <div class="navbar-end space-x-2">
    <a href="/cart" class="btn btn-square btn-ghost">
      <div class="indicator">
        <ShoppingCart />
        <span class="badge indicator-item badge-accent badge-sm">12</span>
      </div>
    </a>
    <a href="/user" class="btn btn-square btn-ghost">
      <User />
    </a>
  </div>
</header>
