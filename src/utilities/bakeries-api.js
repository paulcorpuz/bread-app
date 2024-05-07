import sendRequest from "./send-request";
const BASE_URL = '/api/bakeries';
// const CHECKTOKEN_URL = '/api/users/check-token';

// ? sendRequest can take 3 parameters...
// ? return sendRequest(<url>, method = '<GET?>', payload = <?>) 

// * C
export function create(bakery) {
  return sendRequest(BASE_URL, 'POST', bakery);
}

// * R
export function index() {
  return sendRequest(BASE_URL);
}

// * U
export function edit(id, editBakery) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', { editBakery });
}

// * D
export function deleteBakery(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

// * Google Places Search export
// export function searchBakeries(searchQuery, location, radius) {
//   const url = `${BASE_URL}/search?query=${searchQuery}&location=${location}&radius=${radius}`;
//   return sendRequest(url);
// }

export function searchBakeries(searchQuery, latitude, longitude, radius) {
  const url = `${BASE_URL}/search?query=${searchQuery}&latitude=${latitude}&longitude=${longitude}&radius=${radius}`;
  return sendRequest(url);
}





// * R
export function show(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}




// ? Notes and References -----
// https://hub.generalassemb.ly/learn/course/full-stack-development-21-parent-us-online-12-feb-2024-08-may-2024-201900/consuming-apis/apis?client=courses&page=2