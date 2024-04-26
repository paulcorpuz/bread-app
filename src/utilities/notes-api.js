import sendRequest from "./send-request";
const BASE_URL = '/api/notes';


// export async function indexNote(note) {
//   return sendRequest(BASE_URL, 'GET', note)
// }

export async function addNote(note) {
  return sendRequest(BASE_URL, 'POST', note)
}






// export async function login(credentials) {
//   return sendRequest(LOGIN_URL, 'POST', credentials)
// }

// export function checkToken() {
//   return sendRequest(CHECKTOKEN_URL);
// }