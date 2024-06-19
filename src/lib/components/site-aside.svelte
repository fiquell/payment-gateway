<script lang="ts">
  import { page } from '$app/stores'
  import { List } from 'lucide-svelte'
  import { kebabCase, titleCase } from 'string-ts'

  export let categories: string[]

  $: path = $page.url.pathname
</script>

<aside class="w-1/4">
  <a href="/all-categories" class="btn btn-ghost">
    <List size={16} />
    All Categories
  </a>
  <ul class="menu gap-1 rounded-box">
    {#each categories as category}
      <li>
        <a
          href="/{kebabCase(category)}"
          class:active={path.slice(1) === kebabCase(category)}>
          {titleCase(category)}
        </a>
      </li>
    {/each}
  </ul>
</aside>
