import { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Decode the JWT token to extract the user info
        return JSON.parse(atob(token.split('.')[1]));
      } catch (error) {
        console.error("Error decoding token:", error);
        return null; // If there's an error, return null
      }
    }
    return null;
  });

  const login = (token) => {
    if (token && token.split('.').length === 3) {
      localStorage.setItem('token', token);
      try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        setUser(decoded);
      } catch (error) {
        console.error("Error decoding token:", error);
        setUser(null);  
      }
    } else {
      console.error("Invalid token format:", token);
    }
  };
  

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
