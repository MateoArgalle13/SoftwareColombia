import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useHeroesList } from '../hooks/useHeroesList';
import { HeroCard } from '../components/HeroCard';
import { PaginationControls } from '../components/PaginationControls';
import { PageContainer } from '../../../components/layouts/PageContainer';
import { LoadingSpinner } from '../../../components/ui/LoadingSpinner';
import { DEFAULT_PAGE_SIZE, PAGE_SIZE_OPTIONS } from '../../../lib/constants';

/**
 * Componente de página para mostrar la lista de superhéroes paginada.
 * @returns {JSX.Element}
 */
export const HeroesListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Obtener parámetros de la URL o usar valores por defecto
  const initialPage = parseInt(searchParams.get('page')) || 1;
  const initialSize = parseInt(searchParams.get('size')) || DEFAULT_PAGE_SIZE;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialSize);

  // Actualizar los parámetros de la URL cuando cambian la página o el tamaño
  useEffect(() => {
    setSearchParams({ page: currentPage, size: pageSize });
  }, [currentPage, pageSize, setSearchParams]);

  const { data, isLoading, isError, error, isPreviousData } = useHeroesList(currentPage, pageSize);

  if (isLoading && !isPreviousData) {
    return (
      <PageContainer>
        <LoadingSpinner />
        <p className="text-center text-gray-600 mt-4">Loading heroes...</p>
      </PageContainer>
    );
  }

  if (isError) {
    return (
      <PageContainer>
        <p className="text-red-500 text-center text-lg mt-8">Error loading heroes: {error.message}</p>
      </PageContainer>
    );
  }

  // Si no hay datos y no está cargando, significa que algo salió mal o no hay héroes
  if (!data?.items || data.items.length === 0) {
    return (
      <PageContainer>
        <p className="text-center text-lg mt-8">No heroes found.</p>
      </PageContainer>
    );
  }

  const totalPages = data.lastPage;

  /**
   * Maneja el cambio de página.
   * @param {number} newPage
   */
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo(0, 0); // Opcional: desplazar al inicio de la página al cambiar
    }
  };

  /**
   * Maneja el cambio de tamaño de página.
   * @param {number} newSize
   */
  const handleSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1); // Resetear a la primera página al cambiar el tamaño
  };

  return (
    <PageContainer>
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Superheroes List</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.items.map(hero => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
      
      {data && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onSizeChange={handleSizeChange}
          currentSize={pageSize}
          pageSizeOptions={PAGE_SIZE_OPTIONS}
        />
      )}
    </PageContainer>
  );
};