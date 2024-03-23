<script lang="ts">
  import { page } from '$app/stores';
</script>

<section id="error" class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-8xl font-bold">{$page.status}</h1>
      <h2 class="text-4xl font-bold mt-4">Whoops!</h2>
      {#if $page.status === 404}
        <p class="py-5">The event you're looking for doesn't exist.</p>
      {:else}
        <p class="text-lg py-4">
          There was an error trying to load that event. {$page.error?.message}
        </p>
      {/if}
      <a href="/events" class="btn btn-primary">Go to Events</a>
    </div>
  </div>
</section>
