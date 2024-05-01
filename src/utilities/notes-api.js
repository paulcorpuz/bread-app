import sendRequest from "./send-request";
const BASE_URL = '/api/notes';
// const CHECKTOKEN_URL = '/api/users/check-token';

// ? sendRequest can take 3 parameters...
// ? return sendRequest(<url>, method = '<GET?>', payload = <?>) 

// * C
export function create(newNote) {
  return sendRequest(BASE_URL, 'POST', { newNote });
}

// * R
export function index() {
  return sendRequest(BASE_URL);
}

// * U
export function edit(id, editNote) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', { editNote });
}

// * D
export function deleteNote(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
