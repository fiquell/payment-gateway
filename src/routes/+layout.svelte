<script lang="ts">
  import { PUBLIC_CLIENT_KEY } from '$env/static/public'
  import '../app.css'
</script>

<svelte:head>
  <link rel="icon" href="https://fav.farm/🔥" />
  <meta name="description" content="Payment Gateway Testing" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Payment Gateway</title>
  <script
    src="https://app.sandbox.midtrans.com/snap/snap.js"
    data-client-key={PUBLIC_CLIENT_KEY}></script>
</svelte:head>

<slot />
