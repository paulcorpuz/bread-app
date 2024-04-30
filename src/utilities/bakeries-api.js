// const token = process.env.REACT_APP_GOOGLE_PLACES_KEY;

export async function fetchBakeriesFromGoogle(searchQuery) {
  const seattleLocation = '47.6062,-122.3321'; // Latitude and longitude of Seattle
  const radius = '50000';

  const response = await fetch(`/api/bakeries/search?query=${searchQuery}&location=${seattleLocation}&radius=${radius}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  return data;
}








// https://hub.generalassemb.ly/learn/course/full-stack-development-21-parent-us-online-12-feb-2024-08-may-2024-201900/consuming-apis/apis?client=courses&page=2