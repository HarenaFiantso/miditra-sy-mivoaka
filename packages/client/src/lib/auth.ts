import type { User } from '@/types/api';
import { api } from './api-client';

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export const login = async (data: LoginPayload): Promise<{ token: string }> => {
  const response = await api.post<{ token: string }>('/login', data);
  return response.data;
};

export const register = async (data: RegisterPayload): Promise<{ message: string }> => {
  const response = await api.post<{ message: string }>('/register', data);
  return response.data;
};

export const whoami = async (): Promise<User> => {
  const response = await api.get<User>('/whoami');
  return response.data;
};
