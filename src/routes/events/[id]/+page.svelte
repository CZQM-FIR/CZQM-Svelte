<script lang="ts">
  import { page } from '$app/stores';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data = $bindable() }: Props = $props();

  data.title = `Event Details`;

  let event = $page.data.eventInfo;

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

<section class="min-h-screen pt-40" id="event-info">
  <div class="container mx-auto grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-6">
    <img
      src="https://czqm.ca/files/{event.image}"
      alt="{event.name} Banner"
      class="flex-1 rounded-xl drop-shadow-2xl"
    />
    <div class="flex-1">
      <h2 class="text-3xl font-bold">
        {event.name}
        {#if +new Date(event.start) - +new Date(Date.now()) < 86400000}
          <span class="badge badge-accent">Today</span>
        {:else if +new Date(event.start) - +new Date(Date.now()) < 172800000}
          <span class="badge badge-primary">Tomorrow</span>
        {/if}
      </h2>
      <h3>{getTime(event)}</h3>
      <div class="divider"></div>
      <p>{event.description}</p>
    </div>
  </div>
</section>
