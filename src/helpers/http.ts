import cookieService from '@services/CookieService';
import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';

class Http {
  readonly instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.spotify.com/v1',
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' },
    });

    this.instance.interceptors.request.use(
      (request) => {
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
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }
}

const http = new Http().instance;

export default http;
