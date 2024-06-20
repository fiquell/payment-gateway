<script lang="ts">
  import { page } from '$app/stores'
  import { titleCase } from 'string-ts'
</script>

<section>
  <p>{titleCase($page.params.product)}</p>
</section>
