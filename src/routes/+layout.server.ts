import type { LayoutServerLoad } from './$types';
import { PUBLIC_API_ROUTE } from '$env/static/public';

export const load = (async ({ fetch, url }) => {
  const newsData = await (await fetch(`${PUBLIC_API_ROUTE}/news`)).json();
  const eventData = await (
    await (await fetch(`${PUBLIC_API_ROUTE}/event`)).json()
  ).filter(
    (event: { start: number; name: string }) =>
      new Date(event.start) > new Date(Date.now()) && event.name !== 'Moncton Monday'
  );

  return {
    headline: {
      article: newsData[0],
      event: eventData[0]
    },
    title: '',
    url: url.pathname
  };
}) satisfies LayoutServerLoad;
