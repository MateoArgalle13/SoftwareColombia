import { useQuery } from '@tanstack/react-query';
import { fetchHeroes } from '../api/heroService';

const heroKeys = {
  all: ['heroes'],
  lists: () => [...heroKeys.all, 'list'],
  list: (page, size) => [...heroKeys.lists(), { page, size }],
};

export function useHeroesList(page, size) {
  return useQuery({
    queryKey: heroKeys.list(page, size),
    queryFn: () => fetchHeroes(page, size),
    keepPreviousData: true,
    staleTime: 1000 * 60,
  });
}