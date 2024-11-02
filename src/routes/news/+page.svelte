<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import PageTitle from '$lib/components/PageTitle.svelte';

  interface Props {
    data: PageData;
  }

  let { data = $bindable() }: Props = $props();

  data.title = 'FIR News';

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

<section id="news" class="min-h-screen">
  <PageTitle />
  {#if $page.data.news.length === 0}
    <div class="container mx-auto text-center"><p>No Articles Found</p></div>
  {:else}
    <div class="container mx-auto">
      <div class="flex flex-row gap-6 flex-wrap justify-center">
        {#each data.news as article}
          <a href="/news/{article._id}" class="max-h-64 card w-96 bg-base-100 shadow-xl image-full">
            {#if article.image}
              <figure>
                <img src="https://czqm.ca/files/{article.image}" alt="Shoes" />
              </figure>
            {/if}
            <div class="card-body">
              <h2 class="card-title">
                {article.name}
                {#if data.news.indexOf(article) === 0}
                  <span class="badge badge-secondary">NEW</span>
                {/if}
              </h2>
              <p>{getTime(article)}</p>
              <!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
              <div class="card-actions justify-end">
                <div class="badge badge-primary">Fashion</div>
                <div class="badge badge-primary">Products</div>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  {/if}
</section>
