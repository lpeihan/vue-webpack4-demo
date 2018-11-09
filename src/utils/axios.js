import axios from 'axios';

axios.default.baseURL = '';

axios.interceptors.request.use(
  config => config,
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  res => res,
  err => {
    return Promise.reject(err);
  }
);

export default axios;
