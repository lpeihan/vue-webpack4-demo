import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000
});

instance.interceptors.request.use(
  config => {
    if (config.loading) {
      console.log('loading start');
    }

    return config;
  },
  err => {
    Promise.reject(err);
  }
);

instance.interceptors.response.use(
  res => {
    if (res.config.loading) {
      console.log('loading end');
    }
  },
  err => {
    if (err.config.loading) {
      console.log('loading end');
    }

    return Promise.reject(err);
  }
);

export default instance;
