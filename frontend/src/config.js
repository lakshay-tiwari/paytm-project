// src/config.js
const BASE_URL = "https://paytm-project-7e2o.onrender.com";

export const API_URLS = {
  signup: `${BASE_URL}/user/signup`,
  signin: `${BASE_URL}/user/signin`,
  searchUser: `${BASE_URL}/user/bulk`,
  loginStatus: `${BASE_URL}/user/me`,
  updateInfo: `${BASE_URL}/user/`,
  accountBalance: `${BASE_URL}/account/balance`,
  transferBalance: `${BASE_URL}/account/transfer`
};