<script lang="ts">
  export let roster: Number;
</script>

{#if roster === -1}
  <td class="text-center"> --- </td>
{:else if roster === -2}
  <td class="text-center bg-error text-error-content">In Training</td>
{:else if roster === 0}
  <td class="text-center bg-warning text-warning-content">Solo</td>
{:else if roster === 1}
  <td class="text-center bg-success text-success-content">Certified</td>
{/if}
