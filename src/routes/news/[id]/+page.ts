import { PUBLIC_API_ROUTE } from '$env/static/public';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
  const articleInfoData = await fetch(`${PUBLIC_API_ROUTE}/news/${params.id}`);

  if (articleInfoData.status !== 200) {
    error(404, {
      message: 'Article Not Found'
    });
  }

  return {
    articleInfo: await articleInfoData.json()
  };
}) satisfies PageLoad;
