<script lang="ts">
  import PageTitle from '$lib/components/PageTitle.svelte';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import { PUBLIC_API_ROUTE } from '$env/static/public';

  export let data: PageData;

  data.title = 'Authorizing';

  onMount(async () => {
    const code = $page.url.searchParams.get('code');
    if (code) {
      const res = await fetch(`${PUBLIC_API_ROUTE}/login/${code}`, {
        method: 'POST',
        credentials: 'include'
      });
      location.href = '/';
    }
  });
</script>

<section class="min-h-screen">
  <PageTitle />
</section>
