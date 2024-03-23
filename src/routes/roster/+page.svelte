<script lang="ts">
  import RosterStatusIndicator from './RosterStatusIndicator.svelte';

  import PageTitle from '$lib/components/PageTitle.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  data.title = 'Controller Roster';
</script>

<section id="roster" class="min-h-screen">
  <PageTitle />
  <div class="container mx-auto mb-12">
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
        {#each data.roster.controllers as { name, cid, rating, flags, roster, role }}
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
