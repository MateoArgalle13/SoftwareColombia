import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useHeroesList } from '../../../../features/heroes/hooks/useHeroesList';
import { fetchHeroes } from '../../../../features/heroes/api/heroService'; 
import { vi } from 'vitest';

vi.mock('../../../../features/heroes/api/heroService', () => ({ 
  fetchHeroes: vi.fn(),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, 
    },
  },
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useHeroesList', () => {
  beforeEach(() => {
    fetchHeroes.mockClear(); 
    queryClient.clear(); // 
  });

  it('fetches heroes successfully', async () => {
    const mockData = {
      items: [{ id: '1', name: 'Hero A' }],
      total: 100,
    };
    fetchHeroes.mockResolvedValue(mockData);

    const { result } = renderHook(() => useHeroesList(0, 10), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(fetchHeroes).toHaveBeenCalledWith(0, 10);
    expect(result.current.data).toEqual(mockData);
  });

  it('handles error when fetching heroes', async () => {
    const mockError = new Error('Network Error');
    fetchHeroes.mockRejectedValue(mockError);

    const { result } = renderHook(() => useHeroesList(0, 10), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toEqual(mockError);
    expect(fetchHeroes).toHaveBeenCalledWith(0, 10);
  });

  it('caches data based on page and size', async () => {
    const mockDataPage0 = { items: [{ id: '1', name: 'Hero A' }], total: 100 };
    const mockDataPage1 = { items: [{ id: '2', name: 'Hero B' }], total: 100 };

    fetchHeroes.mockResolvedValueOnce(mockDataPage0);
    const { result: result0 } = renderHook(() => useHeroesList(0, 10), { wrapper });
    await waitFor(() => expect(result0.current.isSuccess).toBe(true));

    fetchHeroes.mockResolvedValueOnce(mockDataPage1);
    const { result: result1 } = renderHook(() => useHeroesList(1, 10), { wrapper });
    await waitFor(() => expect(result1.current.isSuccess).toBe(true));

    const { result: result0ReRender } = renderHook(() => useHeroesList(0, 10), { wrapper });
    await waitFor(() => expect(result0ReRender.current.isSuccess).toBe(true));

    expect(fetchHeroes).toHaveBeenCalledTimes(2);
    expect(result0ReRender.current.data).toEqual(mockDataPage0);
  });
});