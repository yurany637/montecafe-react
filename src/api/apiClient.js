import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
});

// Interceptor opcional para token (si usas JWT)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // ajusta a tu lógica real
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;