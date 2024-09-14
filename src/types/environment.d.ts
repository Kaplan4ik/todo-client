// eslint-disable-next-line no-unused-vars
declare namespace NodeJS {
  // eslint-disable-next-line no-unused-vars
  interface ProcessEnv {
    readonly VITE_APP_API_URL: string;
    readonly VITE_APP_AUTH0_DOMAIN: string;
    readonly VITE_APP_AUTH0_CLIENT_ID: string;
    readonly VITE_APP_AUTH0_AUDIENCE: string;
  }
}
