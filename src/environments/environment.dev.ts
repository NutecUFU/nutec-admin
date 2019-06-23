const BASE_URL = 'http://nutecrexlab1.ufu.br/api';

export const environment = {
  production: false,
  mock: true,
  env: 'DEV',
  endpoints: {
    baseURL: BASE_URL,
    auth: `${BASE_URL}/v1/auth`,
    users: `${BASE_URL}/v1/users/`
  }
};
