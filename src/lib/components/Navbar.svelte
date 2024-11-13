<script>
  import { page } from '$app/stores';
  import { PUBLIC_API_ROUTE } from '$env/static/public';
  import {
    IconClipboardData,
    IconCurrentLocation,
    IconList,
    IconLogin2,
    IconLogout,
    IconReportSearch,
    IconUserCircle,
    IconUserFilled,
    IconUserPlus
  } from '@tabler/icons-svelte';
</script>

<!-- Remember when adding items to nav bar to add to both mobile and desktop navbars -->

<nav class="bg-base-100 fixed w-screen z-50">
  <div class="container navbar mx-auto top-0">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            /></svg
          >
        </div>
        <ul class="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box">
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <details>
              <summary>Controllers</summary>
              <ul class="p-2">
                <li><a href="/staff"><IconClipboardData /> Staff</a></li>
                <li>
                  <a href="/roster"><IconList /> Roster</a>
                </li>
                <li><a href="/join"><IconUserPlus /> Join Us</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Pilots</summary>
              <ul class="p-2">
                <li>
                  <a href="/pilot-resources"><IconReportSearch /> Resources</a>
                </li>
                <li><a href="/charts"><IconCurrentLocation /> Charts</a></li>
              </ul>
            </details>
          </li>
          <li><a href="/events">Events</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <a href="/" class="btn btn-ghost text-xl">CZQM / QX</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <div class="dropdown dropdown-bottom">
            <div tabindex="0" role="button">Controllers</div>
            <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="/staff"><IconClipboardData /> Staff</a></li>
              <li>
                <a href="/roster"><IconList /> Roster</a>
              </li>
              <li><a href="/join"><IconUserPlus /> Join Us</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div class="dropdown dropdown-bottom">
            <div tabindex="0" role="button">Pilots</div>
            <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href="/pilot-resources"><IconReportSearch /> Resources</a>
              </li>
              <li><a href="/charts"><IconCurrentLocation /> Charts</a></li>
            </ul>
          </div>
        </li>
        <li><a href="/events">Events</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      {#if $page.data.user && $page.data.user.personal}
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost">
            <IconUserFilled />
            {$page.data.user.personal.name_full}
          </div>
          <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
            <li><a href="/my"><IconUserCircle /> MyCZQM</a></li>
            <li>
              <a href={`${PUBLIC_API_ROUTE}/auth/logout`}><IconLogout /> Logout</a>
            </li>
          </ul>
        </div>
      {:else}
        <a href={$page.data.connectEndpoint} class="btn"><IconLogin2 /> Login</a>
      {/if}
    </div>
  </div>

  <!-- Headline -->
  {#if $page.data.headline.article || $page.data.headline.event}
    <div id="news-header" class="bg-primary text-center p-0.5">
      <h1 class="mx-auto font-semibold">
        {#if $page.data.headline.event}
          <a class="hover:link" href="/events/{$page.data.headline.event._id}"
            ><span class="hidden md:inline">Upcoming Event:</span>
            {$page.data.headline.event.name}</a
          >
        {/if}

        {#if $page.data.headline.event && $page.data.headline.article}
          <span class="text-base-100"> | </span>
        {/if}

        {#if $page.data.headline.article}
          <a class="hover:link" href="/news/{$page.data.headline.article._id}"
            >{$page.data.headline.article.name}</a
          >
        {/if}
      </h1>
    </div>
  {/if}
</nav>
