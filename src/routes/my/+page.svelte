<script lang="ts">
  import PageTitle from '$lib/components/PageTitle.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data = $bindable() }: Props = $props();

  data.title = 'My CZQM'
</script>

<section id="my" class="min-h-screen pt-3">
  <PageTitle />
  <p>Welcome to My CZQM! Please select an option below...</p>
</section>
