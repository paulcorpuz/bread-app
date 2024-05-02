import sendRequest from "./send-request";
const BASE_URL = '/api/reviews';

// const CHECKTOKEN_URL = '/api/users/check-token';

// ? sendRequest can take 3 parameters...
// ? return sendRequest(<url>, method = '<GET?>', payload = <?>) 

// * C
export function create(bakeryId, newReview) {
  return sendRequest(`${BASE_URL}/${bakeryId}/reviews`, 'POST', newReview);
}

// * D
export function deleteReview(bakeryId, reviewId) {
  return sendRequest(`${BASE_URL}/${bakeryId}/reviews/${reviewId}`, 'DELETE');
}