<script lang="ts">
  import { page } from '$app/stores'
  import { ChevronDown, List } from 'lucide-svelte'

  export let categories: App.Categories[]

  let isExpanded = false

  $: path = $page.url.pathname
</script>

<aside class="w-1/4">
  <ul class="menu space-y-1">
    <li>
      <div class="menu-title flex items-center gap-2">
        <List size={16} />
        <p>All Categories</p>
      </div>
      <ul class="space-y-1">
        {#each categories.slice(0, isExpanded ? categories.length : 5) as category}
          <li>
            <a
              href="/{category.slug}"
              class:active={path.slice(1) === category.slug}>
              {category.name}
            </a>
          </li>
        {/each}
        {#if !isExpanded}
          <li>
            <button class="font-semibold" on:click={() => (isExpanded = true)}>
              <span>More</span>
              <ChevronDown size={16} />
            </button>
          </li>
        {/if}
      </ul>
    </li>
  </ul>
</aside>
