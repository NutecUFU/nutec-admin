const BASE_URL = 'http://localhost:8000';

export const environment = {
  production: true,
  mock: false,
  env: '__env__',
  endpoints: {
    baseURL: BASE_URL,
    auth: `${BASE_URL}/v1/auth`,
    users: `${BASE_URL}/v1/users/`
  }
};
