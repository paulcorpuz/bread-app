import sendRequest from "./send-request";
const BASE_URL = '/api/users';
const LOGIN_URL = '/api/users/login';
const CHECKTOKEN_URL = '/api/users/check-token';

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData)
  // // Fetch uses an options object as a second arg
  // // to make requests other than GET, include data,
  // // set headers.
  // const res = await fetch(BASE_URL, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(userData)
  // });
  // // Check if request was successful
  // if (res.ok) {
  //   // res.json() will resolve to the JWT
  //   return res.json();
  // } else {
  //   throw new Error('Invalid Sign Up');
  // }
}

export async function login(credentials) {
  return sendRequest(LOGIN_URL, 'POST', credentials)
  // const res = await fetch(LOGIN_URL, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(userData)
  // });
  // // Check if request succeeded
  // if (res.ok) {
  //   return res.json();
  // } else {
  //   throw new Error('Invalid Log In');
  // }
}

export function checkToken() {
  return sendRequest(CHECKTOKEN_URL);
}