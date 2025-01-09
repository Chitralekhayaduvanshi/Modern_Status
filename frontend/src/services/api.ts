import axios, { AxiosError } from 'axios';
import { Status } from '@/types/status';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getStatuses = async (): Promise<Status[]> => {
  try {
    const response = await api.get('/api/status');
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('API Error:', error.response?.data || error.message);
    }
    throw error;
  }
};

export const updateStatus = async (id: string, data: Partial<Status>) => {
  try {
    const response = await api.put(`/api/status/${id}`, data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('API Error:', error.response?.data || error.message);
    }
    throw error;
  }
};

export const createStatus = async (data: Omit<Status, '_id' | 'lastUpdated'>) => {
  try {
    const response = await api.post('/api/status', data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('API Error:', error.response?.data || error.message);
    }
    throw error;
  }
};

export const deleteStatus = async (id: string) => {
  try {
    const response = await api.delete(`/api/status/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('API Error:', error.response?.data || error.message);
    }
    throw error;
  }
};

export default api; 