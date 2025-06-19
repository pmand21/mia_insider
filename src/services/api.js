import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error.response?.data || error);
  }
);

// API methods
export const clubsAPI = {
  getAll: () => api.get('/clubs'),
  getById: (id) => api.get(`/clubs/${id}`),
};

export const eventsAPI = {
  getAll: (params = {}) => api.get('/events', { params }),
  getById: (id) => api.get(`/events/${id}`),
  getByDate: (date) => api.get(`/events/calendar/${date}`),
  getFeatured: () => api.get('/events?featured=true'),
  getUpcoming: (limit = 4) => api.get(`/events?limit=${limit}`),
};

export const contentAPI = {
  getArticles: (params = {}) => api.get('/content/articles', { params }),
  getArticleBySlug: (slug) => api.get(`/content/articles/${slug}`),
  getFeaturedArticles: () => api.get('/content/articles?featured=true'),
};

export const newsletterAPI = {
  subscribe: (email, name = null) => api.post('/newsletter/subscribe', { email, name }),
  getSubscriberCount: () => api.get('/newsletter/subscribers'),
};

export const healthAPI = {
  check: () => api.get('/health'),
};

export default api;