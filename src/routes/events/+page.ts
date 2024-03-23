import type { PageLoad } from './$types';
import { PUBLIC_API_ROUTE } from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
  let events = await (await fetch(`${PUBLIC_API_ROUTE}/event`)).json();

  return {
    events
  };
};
