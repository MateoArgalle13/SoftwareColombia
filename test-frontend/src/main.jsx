// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './app/router'; // Asegúrate de que esta sea la ruta correcta a tu router principal
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; 
import './app/styles/index.scss'; // Tus estilos globales, ya sin Tailwind

// Importaciones de Material UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// 1. Crea una instancia de QueryClient para React Query
// Esta es la configuración global para todas tus consultas.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Desactiva el refetch automático al cambiar de ventana
      retry: 1, // Reintenta las peticiones fallidas 1 vez por defecto
      // staleTime: 1000 * 60 * 5, // Datos "frescos" por 5 minutos antes de ser considerados "stale"
    },
  },
});

// Puedes crear un tema básico por ahora. Más adelante, puedes personalizarlo.
const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provee el tema de Material UI a toda la aplicación */}
    <ThemeProvider theme={theme}>
      {/* CssBaseline para normalizar los estilos CSS entre navegadores */}
      <CssBaseline />
      {/* Provee el cliente de React Query a toda la aplicación */}
      <QueryClientProvider client={queryClient}>
        {/* El componente que contiene toda la configuración de rutas de tu aplicación */}
        <AppRouter />
        {/* Herramientas de desarrollo de React Query, solo activas en desarrollo */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);