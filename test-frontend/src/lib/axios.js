import axios from 'axios';

// Crea una instancia de Axios con configuraciones comunes
const api = axios.create({
  baseURL: 'https://ealw717ym2.execute-api.us-east-1.amazonaws.com/api', // URL base de tu API
  timeout: 15000, // Tiempo de espera para las peticiones (15 segundos)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Opcional: Interceptores para manejar errores globales o autenticación
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Aquí puedes manejar errores comunes, por ejemplo:
    // if (error.response && error.response.status === 401) {
    //   // Redirigir al login o refrescar token
    // }
    return Promise.reject(error);
  }
);

export default api;