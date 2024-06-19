import axios, { AxiosInstance } from 'axios';

class Http {
  readonly instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.BACKEND_CLIENT,
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

const http = new Http().instance;

export default http;
