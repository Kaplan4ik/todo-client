export interface EnvironmentVariables {
  apiUrl: string;
  auth0Domain: string;
  auth0ClientId: string;
  auth0Audience: string;
}

export const env: EnvironmentVariables = {
  apiUrl: import.meta.env.VITE_APP_API_URL,
  auth0Domain: import.meta.env.VITE_APP_AUTH0_DOMAIN,
  auth0ClientId: import.meta.env.VITE_APP_AUTH0_CLIENT_ID,
  auth0Audience: import.meta.env.VITE_APP_AUTH0_AUDIENCE,
};
