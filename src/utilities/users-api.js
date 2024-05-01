import sendRequest from "./send-request";
const BASE_URL = '/api/users';
const LOGIN_URL = '/api/users/login';
const CHECKTOKEN_URL = '/api/users/check-token';


export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData)
}

export async function login(credentials) {
  return sendRequest(LOGIN_URL, 'POST', credentials)
}

export function checkToken() {
  return sendRequest(CHECKTOKEN_URL);
}

// ? sendRequest can take 3 parameters...
// ? return sendRequest(<url>, method = '<GET?>', payload = <?>) 

// * U
export function edit(id, editProfile) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', editProfile);
}

