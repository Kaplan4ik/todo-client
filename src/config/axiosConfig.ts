import axios from 'axios';

import { env } from 'environment/constants/env';

const instance = axios.create({
  baseURL: env.apiUrl,
});

export default instance;
