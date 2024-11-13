<script lang="ts">
  import PageTitle from '$lib/components/PageTitle.svelte';
  import type { PageData } from '../staff/$types';

  interface Props {
    data: PageData;
  }

  let { data = $bindable() }: Props = $props();

  data.title = 'FIR Staff';
</script>

<section class="min-h-screen">
  <PageTitle />
</section>
