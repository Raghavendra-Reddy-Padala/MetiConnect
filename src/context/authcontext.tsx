import React, { createContext, useState, useEffect, useContext } from 'react';
import AuthService from '../service/authenticationservice';
import { useNavigate } from 'react-router-dom';

// Create auth context
const AuthContext = createContext({
  currentUser: null,
  loading: true,
  error: null,
  register: async (userData: any) => {},
  login: async (email: string, password: string) => {},
  logout: () => {},
  updateProfile: async (profileData: any) => {}
});

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

import { ReactNode } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Load user on initial render
  useEffect(() => {
    const loadUser = async () => {
      try {
        // Check if token exists
        const token = localStorage.getItem('token');
        if (!token) {
          setLoading(false);
          return;
        }

        // Get current user profile
        const response = await AuthService.getCurrentUser();
        setCurrentUser(response.data.user);
      } catch (err) {
        console.error('Failed to load user', err);
        // Clear token if it's invalid or expired
        if ((err as any).response?.status === 401) {
          localStorage.removeItem('token');
        }
        setError((err as any).message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // Register a new user
  const register = async (userData: any) => {
    try {
      setLoading(true);
      setError(null);
      const response = await AuthService.register(userData);
      setCurrentUser(response.data.user);
      
      // Redirect based on user role
      if (response.data.user.role === 'mentor') {
        navigate('/mentor/dashboard');
      } else {
        navigate('/dashboard');
      }
      
      return response.data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const login = async (email: any, password: any) => {
    try {
      setLoading(true);
      setError(null);
      const response = await AuthService.login(email, password);
      setCurrentUser(response.user);
      
      // Redirect based on user role
      if (response.user.role === 'mentor') {
        navigate('/mentor/dashboard');
      } else {
        navigate('/dashboard');
      }
      
      return response;
    } catch (err) {
      setError((err as any).response?.data?.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logout = () => {
    AuthService.logout();
    setCurrentUser(null);
    navigate('/signin');
  };

  // Update user profile
  const updateProfile = async (profileData: any) => {
    try {
      setLoading(true);
      setError(null);
      const response = await AuthService.updateProfile(profileData);
      setCurrentUser(response.data.user);
      return response.data;
    } catch (err) {
      setError((err as any).response?.data?.message || 'Failed to update profile');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    register,
    login,
    logout,
    updateProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;