import axios from 'axios';

const api = axios.create({
  baseURL: 'https://contact-manager-smoky.vercel.app/api/',
  headers: {
    'Content-Type': 'application/json',
    // You can add other default headers here
  },
});

export default api;