import { PUBLIC_API_ROUTE } from '$env/static/public';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
  const eventInfoData = await fetch(`${PUBLIC_API_ROUTE}/event/${params.id}`);

  if (eventInfoData.status !== 200) {
    error(404, {
      message: 'Event not found'
    });
  }

  return {
    eventInfo: await eventInfoData.json()
  };
}) satisfies PageLoad;
