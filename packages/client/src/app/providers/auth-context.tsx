import { LoadingPage } from '@/components/shared';
import { whoami, login as loginApi } from '@/lib/auth';
import type { User } from '@/types/api';
import React, { createContext, useEffect, useState } from 'react';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const loadUser = async () => {
      if (token) {
        try {
          const data = await whoami();
          setUser(data);
        } catch {
          localStorage.removeItem('token');
        }
      }
      setTimeout(() => setLoading(false), 1000);
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    const { token } = await loginApi({ email, password });
    localStorage.setItem('token', token);
    const userData = await whoami();
    setUser(userData);
  };

  const logout = (): void => {
    localStorage.removeItem('token');
    setUser(null);
  };

  if (loading) return <LoadingPage />;

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext };
