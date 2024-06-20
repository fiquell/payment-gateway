<script lang="ts">
  import { page } from '$app/stores'
  import { List } from 'lucide-svelte'

  export let categories: App.Categories[]

  $: path = $page.url.pathname
</script>

<aside class="w-1/4">
  <a href="/all-categories" class="btn btn-ghost">
    <List size={16} />
    All Categories
  </a>
  <ul class="menu gap-1">
    {#each categories as category}
      <li>
        <a
          href="/{category.slug}"
          class:active={path.slice(1) === category.slug}>
          {category.name}
        </a>
      </li>
    {/each}
  </ul>
</aside>
