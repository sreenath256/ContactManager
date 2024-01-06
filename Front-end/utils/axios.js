import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'Content-Type': 'application/json',
    // You can add other default headers here
  },
});

export default api;