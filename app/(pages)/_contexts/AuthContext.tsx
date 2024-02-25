'use client';
import { createContext, useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import VerifyToken from '@actions/auth/verifyToken';
import AuthTokenInt from '@typeDefs/authToken';

interface AuthProviderValue {
  user: AuthTokenInt;
  loading: boolean;
  login: (user: AuthTokenInt) => void;
  logout: () => void;
}

const deleteAuthTokenCookie = () => {
  // Delete the 'auth-token' cookie
  Cookies.remove('auth_token', { path: '/' });
};

export type { AuthTokenInt, AuthProviderValue };

export const AuthContext = createContext({});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthTokenInt | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateAuth = async () => {
      const cookie = Cookies.get('auth_token');
      if (!cookie) {
        setLoading(false);
        return;
      }

      const data = await VerifyToken(cookie);
      if (!data.ok) {
        setLoading(false);
        return;
      }

      const userData = data.body as AuthTokenInt | null;

      setUser(userData);
      setLoading(false);
    };

    updateAuth();
  }, []);

  const login = useCallback((user: AuthTokenInt | null) => {
    setUser(user);
  }, []);

  const logout = useCallback(() => {
    deleteAuthTokenCookie();
    setUser(null);
  }, []);

  const contextValue = { user, loading, login, logout };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
