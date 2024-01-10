import axios from 'axios';

const api = axios.create({
  baseURL: 'http:',
  headers: {
    'Content-Type': 'application/json',
    // You can add other default headers here
  },
});

export default api;