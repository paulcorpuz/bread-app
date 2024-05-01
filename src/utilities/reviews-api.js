import sendRequest from "./send-request";
const BASE_URL = '/api/reviews';
// const CHECKTOKEN_URL = '/api/users/check-token';

// ? sendRequest can take 3 parameters...
// ? return sendRequest(<url>, method = '<GET?>', payload = <?>) 

// * C
export function create(newReview) {
  return sendRequest(BASE_URL, 'POST', { newReview });
}

// * D
export function deleteReview(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
