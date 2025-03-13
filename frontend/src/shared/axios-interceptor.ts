
import axios, { InternalAxiosRequestConfig } from 'axios';

const TIMEOUT = 1000000;

const onRequestSuccess = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const backendPort = process.env.VUE_APP_BACKEND_API_PORT || 4000;
  const backendApiUrl = process.env.VUE_APP_BACKEND_API_URL;
  config.url = `${backendApiUrl}:${backendPort}/${config.url}`;
  config.timeout = TIMEOUT;
  return config;
};

const setupAxiosInterceptors = (onUnauthenticated: () => void): void => {
  const onResponseError = (err: any) => {
    const status = err.status || (err.response && err.response.status);

    let error;
    if (err.response?.data && (err.response.data.errorMessage || err.response.data.errorCode || err.response.data.httpCode)) {
      error = err.response.data;
    } else {
      error = new Error('general.httpError ' + status);
    }
    if (status === 403 || status === 401) {
      onUnauthenticated();
    }
    return Promise.reject(error);
  };
  /* istanbul ignore next */
  if (axios.interceptors) {
    axios.interceptors.request.use(onRequestSuccess);
    axios.interceptors.response.use(res => res, onResponseError);
  }
};

export { onRequestSuccess, setupAxiosInterceptors };
