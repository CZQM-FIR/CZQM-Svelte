import { PUBLIC_API_ROUTE } from '$env/static/public';

const getNews = async (fetch: any, newsID = '') => {
  let newsData = await (await fetch(`${PUBLIC_API_ROUTE}/api/news/${newsID}`)).json();

  newsData = newsData ? newsData.data : [];

  if (typeof newsData == 'object') {
    return newsData;
  } else {
    const sortedNewsData = newsData.sort((a: { date: number }, b: { date: number }) => {
      return b.date - a.date;
    });
    return sortedNewsData;
  }
};

export default getNews;
