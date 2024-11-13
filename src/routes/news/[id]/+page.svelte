<script lang="ts">
  import { page } from '$app/stores';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data = $bindable() }: Props = $props();

  data.title = `Event Details`;

  let article = $page.data.articleInfo;

  const getTime = (article: any) => {
    const time = new Date(article.date);
    const timeUTC = new Date(time.getTime() + time.getTimezoneOffset() * 60000);

    // Format the time/date in DD/MM HHMMz format
    const timeString = `${timeUTC
      .getDate()
      .toLocaleString('en-US', { minimumIntegerDigits: 2 })}/${(
      timeUTC.getMonth() + 1
    ).toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })} ${timeUTC.getHours().toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })}${timeUTC.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 })}z`;

    return timeString;
  };
</script>

<section class="min-h-screen pt-40" id="event-info">
  <div
    class="container mx-auto grid grid-cols-1 {article.image
      ? 'grid-rows-2 lg:grid-cols-2'
      : 'grid-rows-1 lg:grid-cols-1'} lg:grid-rows-1 gap-6"
  >
    {#if article.image}
      <img
        src="https://czqm.ca/files/{article.image}"
        alt="{article.name} Banner"
        class="flex-1 rounded-xl drop-shadow-2xl"
      />
    {/if}
    <div class="flex-1">
      <h2 class="text-3xl font-bold">
        {article.name}
      </h2>
      <h3>{getTime(article)}</h3>
      <div class="divider"></div>
      <p>{article.text}</p>
    </div>
  </div>
</section>
