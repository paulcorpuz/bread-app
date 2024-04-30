const token = process.env.GOOGLE_PLACES_KEY;

export async function fetchBakeriesFromGoogle() {
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=bakeries+in+seattle&key=${token}`);
  const data = await response.json();
  return data.results;
}