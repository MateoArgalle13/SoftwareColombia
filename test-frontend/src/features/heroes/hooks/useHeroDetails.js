// src/features/heroes/hooks/useHeroDetails.js
import { useQuery } from '@tanstack/react-query';
import { fetchHeroById } from '../api/heroService';

const heroKeys = {
  all: ['heroes'],
  details: () => [...heroKeys.all, 'detail'],
  detail: (id) => [...heroKeys.details(), id],
};

export function useHeroDetails(heroId) {
  return useQuery({
    queryKey: heroKeys.detail(heroId),
    queryFn: () => fetchHeroById(heroId),
    enabled: !!heroId,
    staleTime: 1000 * 60 * 5,
  });
}