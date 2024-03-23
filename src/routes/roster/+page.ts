import type { PageLoad } from './$types';
import { PUBLIC_API_ROUTE } from '$env/static/public';

export const load = (async ({ fetch }) => {
  const response = await fetch(`${PUBLIC_API_ROUTE}/roster`);
  const data = await response.json();

  const controllers = data.filter((c: any) => c.flags.includes('controller'));
  const visitors = data.filter((c: any) => c.flags.includes('visitor'));

  return {
    roster: {
      controllers,
      visitors
    }
  };
}) satisfies PageLoad;
