import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Revisa el puerto de tu backend en Java
});

export default api;