// import axios, { AxiosResponse } from 'axios';
// import { ErrorHandler } from './errorHandler';

// export const baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

// const instance = axios.create({
//   baseURL,
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// const successHandler = (response: AxiosResponse) => {
//   return response;
// };

// instance.interceptors.response.use(
//   (response) => successHandler(response),
//   (error) => Promise.reject(ErrorHandler(error))
// );

// export default instance;

import axios, { AxiosResponse } from 'axios';
import { ErrorHandler } from './errorHandler';
import { store } from '@/store';

export const baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const successHandler = (response: AxiosResponse) => {
  return response;
};

// Simple request interceptor to add token
instance.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.token;
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

// Response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => successHandler(response), // Simplified success handler
  (error) => Promise.reject(ErrorHandler(error)) // Your existing error handler
);

export default instance;
