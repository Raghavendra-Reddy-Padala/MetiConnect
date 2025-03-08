import axios from 'axios';

// Set base URL for API requests
const API_URL = 'http://localhost:5000/api';

// Add a request interceptor to include token with every request
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth service functions
const AuthService = {
  // Register new user
  register: async (userData: any) => {
    return axios.post(`${API_URL}/auth/register`, userData);
  },

  // Login user
  login: async (email: any, password: any) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('token');
  },

  // Get current user profile
  getCurrentUser: async () => {
    return axios.get(`${API_URL}/users/profile`);
  },

  // Update user profile
  updateProfile: async (profileData: any) => {
    return axios.put(`${API_URL}/users/profile`, profileData);
  },

  // Update mentor availability
  updateMentorAvailability: async (availability: any) => {
    return axios.put(`${API_URL}/users/mentors/availability`, { availability });
  },

  // Update mentor hourly rate
  updateMentorRate: async (hourlyRate: any) => {
    return axios.put(`${API_URL}/users/mentors/rate`, { hourlyRate });
  }
};

export default AuthService;