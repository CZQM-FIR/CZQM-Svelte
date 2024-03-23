<script lang="ts">
  import { page } from '$app/stores';
</script>

<section id="error" class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-8xl font-bold">{$page.status}</h1>
      <h2 class="text-4xl font-bold mt-4">Whoops!</h2>
      {#if $page.status === 404}
        <p class="py-5">
          Looks like you're a little lost. Let's get you back on track. The page you're looking for
          does not exist.
        </p>
      {:else}
        <p class="text-lg py-4">
          An error occurred while trying to load this page. {$page.error?.message}
        </p>
      {/if}
      <a href="/" class="btn btn-primary">Go Home</a>
    </div>
  </div>
</section>
