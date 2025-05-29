import { useQuery } from '@tanstack/react-query';
import { fetchHeroes } from '../api/heroService';

/**
 * Custom hook para obtener la lista paginada de superhéroes.
 * @param {number} page - El número de página actual.
 * @param {number} size - El tamaño de la página.
 * @returns {object} Objeto con los datos de la query (data, isLoading, isError, error, isPreviousData).
 */
export const useHeroesList = (page, size) => {
  return useQuery({
    queryKey: ['heroes', page, size], // Clave para cachear los datos por página y tamaño
    queryFn: () => fetchHeroes(page, size),
    keepPreviousData: true, // Mantener datos previos mientras se cargan los nuevos para una UX más fluida
  });
};