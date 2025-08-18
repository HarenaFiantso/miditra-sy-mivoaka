import Axios from 'axios';

import { env } from '@/config/env';

export const api = Axios.create({
  baseURL: env.API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
