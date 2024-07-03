import axios, { AxiosError } from 'axios';

import { API_URL } from '@/constants';

import { LocaleStorageService } from './localStorage';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    config.baseURL = API_URL;
    config.headers.Authorization = `Bearer ${LocaleStorageService.getToken()}`;
    return config;
  },
  (error) => {
    console.log(error);
  },
);

axiosInstance.interceptors.response.use(
  (resposnse) => {
    return resposnse;
  },
  (error: AxiosError<{ reason: string; success: boolean }>) => {
    if (error.response) {
      throw new Error(error.response.data.reason);
    }
    return Promise.reject(error);
  },
);

export { axiosInstance };
