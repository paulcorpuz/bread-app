import sendRequest from "./send-request";
const BASE_URL = '/api/bakeries';
// const CHECKTOKEN_URL = '/api/users/check-token';
// const token = process.env.REACT_APP_GOOGLE_PLACES_KEY;

// ? sendRequest can take 3 parameters...
// ? return sendRequest(<url>, method = '<GET?>', payload = <?>) 

// * C
export function create(newBakery) {
  return sendRequest(BASE_URL, 'POST', { newBakery });
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


// * Search export from Backend
export function searchBakeries(searchQuery, location, radius) {
  const url = `${BASE_URL}/search?query=${searchQuery}&location=${location}&radius=${radius}`;
  return sendRequest(url);
}






// https://hub.generalassemb.ly/learn/course/full-stack-development-21-parent-us-online-12-feb-2024-08-may-2024-201900/consuming-apis/apis?client=courses&page=2