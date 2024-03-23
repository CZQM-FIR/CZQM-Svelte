<script lang="ts">
  import type { LayoutData } from './$types';
  import { page } from '$app/stores';

  import '../app.css';

  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';

  export let data: LayoutData;
</script>

<svelte:head>
  <title>CZQM / QX</title>
</svelte:head>

<Navbar />

<main>
  <slot />
</main>

<Footer />
