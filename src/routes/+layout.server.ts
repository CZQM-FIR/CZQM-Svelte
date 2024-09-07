import type { LayoutServerLoad } from './$types';
import { PUBLIC_API_ROUTE } from '$env/static/public';

export const load = (async ({ fetch, url, cookies }) => {
  const newsData = await (await fetch(`${PUBLIC_API_ROUTE}/news`)).json();
  const eventData = await (
    await (await fetch(`${PUBLIC_API_ROUTE}/event`)).json()
  ).filter(
    (event: { start: number; name: string }) =>
      new Date(event.start) > new Date(Date.now()) && event.name !== 'Moncton Monday'
  );

  const endpointRes = await fetch(`${PUBLIC_API_ROUTE}/vatsim-connect`);
  const { endpoint: connectEndpoint } = await endpointRes.json();

  let user = undefined

  if (cookies.get('session')) {
    const userRes = await fetch(`${PUBLIC_API_ROUTE}/user`, {
      credentials: 'include'
    });
    user = await userRes.json();
  }

  return {
    headline: {
      article: newsData[0],
      event: eventData[0]
    },
    title: '',
    url: url.pathname,
    connectEndpoint,
    user
  };
}) satisfies LayoutServerLoad;
