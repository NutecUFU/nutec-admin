const BASE_URL = 'nutec.ufu.br/api';

export const environment = {
  production: true,
  mock: false,
  env: '__env__',
  endpoints: {
    baseURL: BASE_URL,
    auth: `${BASE_URL}/v1/auth`
  }
};
