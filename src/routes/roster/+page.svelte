<script lang="ts">
  import RosterStatusIndicator from './RosterStatusIndicator.svelte';

  import PageTitle from '$lib/components/PageTitle.svelte';
  import type { PageData } from './$types';
  import { onMount } from 'svelte';

  interface Props {
    data: PageData;
  }

  let { data = $bindable() }: Props = $props();

  let search = $state('');
  let controllers: any[] = $state([]);

  onMount(() => {
    filterControllers();
  });

  const filterControllers = () => {
    return (controllers = data.roster.controllers.filter((controller: any) => {
      return (
        controller.name.toLowerCase().includes(search.toLowerCase()) ||
        controller.cid.includes(search) ||
        controller.role.toLowerCase().includes(search.toLowerCase())
      );
    }));
  };

  data.title = 'Controller Roster';
</script>

<section id="roster" class="min-h-screen">
  <PageTitle />
  <div class="container mx-auto mb-12">
    <div class="me-auto max-w-64">
      <label class="input input-bordered flex items-center gap-2">
        <input
          type="text"
          class="grow"
          placeholder="Search"
          bind:value={search}
          oninput={filterControllers}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4 opacity-70"
          ><path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          /></svg
        >
      </label>
    </div>
    <table class="table table-zebra">
      <thead>
        <tr>
          <th></th>
          <!-- Name, Rating, Role -->
          <th></th>
          <!-- CID -->
          <th></th>
          <!-- Status -->
          <th>GND</th>
          <th>TWR</th>
          <th>APP</th>
          <th>CTR</th>
        </tr>
      </thead>
      <tbody>
        {#each controllers as { name, cid, rating, flags, roster, role }}
          <tr>
            <th class="flex flex-col">
              <span class="font-bold">{name} ({rating})</span>
              <span class="font-normal">{role}</span>
            </th>
            <td>{cid}</td>
            <td></td>
            <RosterStatusIndicator roster={roster.gnd} />
            <RosterStatusIndicator roster={roster.twr} />
            <RosterStatusIndicator roster={roster.app} />
            <RosterStatusIndicator roster={roster.ctr} />
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
