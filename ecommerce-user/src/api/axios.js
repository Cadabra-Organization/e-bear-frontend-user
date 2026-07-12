import axios from 'axios';

// export const API_BASE_URL = 'http://localhost:8888';

const api = axios.create({
  baseURL: 'http://localhost:8888',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    const token = response.headers?.access_token;
    if (token) {
      localStorage.setItem("token", token.replace(/^Bearer\s+/i, ""));
    }
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('로그인이 만료되었습니다.');
    }
    return Promise.reject(error);
  }
);

export default api;
