import axios from 'axios';

const CODE_OK = 0;

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  _loading: true
});

instance.interceptors.request.use(
  config => {
    if (config._loading) {
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
    if (res.config._loading) {
      console.log('loading end');
    }

    if (res.data.code === CODE_OK) {
      return res.data.data;
    } else {
      return Promise.reject(res.data);
    }
  },
  err => {
    if (err.config._loading) {
      console.log('loading end');
    }

    return Promise.reject(err);
  }
);

export default instance;
