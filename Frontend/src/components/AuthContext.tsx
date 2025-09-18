import React, { createContext, useContext, useEffect, useState } from 'react';
import storage from './LocalStorage'; // your custom storage handler

interface AuthContextType {
  isAuthenticated: boolean;
  displayName?: string;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  logout: () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [displayName, setDisplayName] = useState<string | undefined>();

  useEffect(() => {
    const name = storage.get('displayname');
    if (name) {
      setIsAuthenticated(true);
      setDisplayName(name);
    }
  }, []);

  const logout = () => {
     localStorage.clear();
    setIsAuthenticated(false);
    setDisplayName(undefined);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, displayName, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);