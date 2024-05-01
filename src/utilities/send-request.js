import { getToken } from './users-service';


export default async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method }
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' }
    options.body = JSON.stringify(payload)
  }
  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  
  const res = await fetch(url, options);

  // Check if request was successful > yes? return json no? throw error
  if (res.ok) return res.json();
  throw new Error('Invalid Sign Up');
}


//https://www.geeksforgeeks.org/difference-between-throw-errormsg-and-throw-new-errormsg/