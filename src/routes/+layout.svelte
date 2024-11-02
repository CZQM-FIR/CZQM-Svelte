<script lang="ts">
  import type { LayoutData } from './$types';
  import { page } from '$app/stores';

  import '../app.css';

  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';

  interface Props {
    data: LayoutData;
    children?: import('svelte').Snippet;
  }

  let { data, children }: Props = $props();
</script>

<svelte:head>
  <title>CZQM / QX</title>
</svelte:head>

<Navbar />

<main>
  {@render children?.()}
</main>

<Footer />
