// src/config.js
const BASE_URL = "http://localhost:3000/api/v1"; // this is for local development (same for docker local development)
export const API_URLS = {
  signup: `${BASE_URL}/user/signup`,
  signin: `${BASE_URL}/user/signin`,
  searchUser: `${BASE_URL}/user/bulk`,
  loginStatus: `${BASE_URL}/user/me`,
  updateInfo: `${BASE_URL}/user/`,
  accountBalance: `${BASE_URL}/account/balance`,
  transferBalance: `${BASE_URL}/account/transfer`
};