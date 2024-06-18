export interface EnvironmentVariables {
  apiUrl: string;
}

export const env: EnvironmentVariables = {
  apiUrl: import.meta.env.VITE_APP_API_URL,
};
