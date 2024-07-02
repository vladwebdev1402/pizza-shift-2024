import axios from 'axios';
import { LocaleStorageService } from './localStorage';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  config.baseURL = 'https://shift-backend.onrender.com';
  config.headers.Authorization = LocaleStorageService.getToken();
  return config;
});

export { axiosInstance };
