import cookieService from '@services/CookieService';
import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';

class Http {
  readonly instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.BACKEND_CLIENT,
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' },
    });

    this.instance.interceptors.request.use((request) => {
      const accessToken = cookieService.get('access_token');

      const headers = {
        ...request.headers,
        Authorization: 'Bearer ' + accessToken,
      } as AxiosRequestHeaders;

      request = {
        ...request,
        headers,
      };

      return request;
    });

    this.instance.interceptors.response.use((response) => {
      return response.data;
    });
  }
}

const http = new Http().instance;

export default http;
