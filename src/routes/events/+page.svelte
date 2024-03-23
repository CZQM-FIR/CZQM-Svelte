<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import PageTitle from '$lib/components/PageTitle.svelte';

  export let data: PageData;

  data.title = 'Upcomming Events';

  const getTime = (event: any) => {
    const start = new Date(event.start);
    const end = new Date(event.end);
    const startUTC = new Date(start.getTime() + start.getTimezoneOffset() * 60000);
    const endUTC = new Date(end.getTime() + end.getTimezoneOffset() * 60000);

    // Format the time/date in DD/MM HHMMz format
    const startTime = `${startUTC
      .getDate()
      .toLocaleString('en-US', { minimumIntegerDigits: 2 })}/${(
      startUTC.getMonth() + 1
    ).toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })} ${startUTC.getHours().toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })}${startUTC.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 })}z`;
    const endTime = `${endUTC.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2 })}/${(
      endUTC.getMonth() + 1
    ).toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })} ${endUTC.getHours().toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })}${endUTC.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 })}z`;

    return startTime + ' - ' + endTime;
  };
</script>

<section id="events" class="min-h-screen">
  <PageTitle />
  {#if $page.data.events.length === 0}
    <div class="container mx-auto text-center"><p>No Upcomming Events</p></div>
  {:else}
    <div
      class="container mx-auto flex flex-row flex-wrap justify-center gap-4 {$page.data.events
        .length < 3
        ? 'lg:justify-normal'
        : ''}"
    >
      {#each $page.data.events as event}
        <a href="/events/{event._id}">
          <div
            class="card w-96 bg-base-300 shadow-xl hover:shadow-neutral hover:shadow-md transition"
          >
            <figure>
              <img src="https://czqm.ca/files/{event.image}" alt={event.name} />
              <!-- TODO Rmove direct mention to domain, make relative-->
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                {event.name}
                {#if +new Date(event.start) - +new Date(Date.now()) < 86400000}
                  <span class="badge badge-accent">Today</span>
                {:else if +new Date(event.start) - +new Date(Date.now()) < 172800000}
                  <span class="badge badge-primary">Tomorrow</span>
                {/if}
              </h2>
              <p class="text-sm">{getTime(event)}</p>
            </div>
          </div></a
        >
      {/each}
    </div>
  {/if}
</section>
