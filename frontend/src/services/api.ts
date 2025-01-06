import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getStatuses = async () => {
  const response = await api.get('/api/status');
  return response.data;
};

export const updateStatus = async (id: string, data: any) => {
  const response = await api.put(`/api/status/${id}`, data);
  return response.data;
};

export const createStatus = async (data: any) => {
  const response = await api.post('/api/status', data);
  return response.data;
};

export const deleteStatus = async (id: string) => {
  const response = await api.delete(`/api/status/${id}`);
  return response.data;
}; 