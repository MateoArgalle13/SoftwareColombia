import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Crea una instancia de QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Los datos se consideran "stale" después de 5 minutos
      refetchOnWindowFocus: false, // Evita que se haga un refetch en cada cambio de foco
    },
  },
});

/**
 * Proveedor global de React Query para la aplicación.
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}