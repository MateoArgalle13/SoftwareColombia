import { useState } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Grid,
  Pagination,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

import { useHeroesList } from '../../features/heroes/hooks/useHeroesList';
import HeroCard from '../../components/HeroCard';

export function HeroesListPage() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(9); 

  const { data, isLoading, isError, error } = useHeroesList(page, pageSize);


  const handlePageChange = (event, value) => {
    setPage(value - 1); 
    window.scrollTo(0, 0); 
  };

  // Manejar el cambio de tamaño de página
  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    // Reiniciar a la primera página al cambiar el tamaño
    setPage(0); 
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>Cargando superhéroes...</Typography>
      </Box>
    );
  }

  if (isError) {
    return (
      <Alert severity="error" sx={{ mt: 3, mx: 'auto', width: 'fit-content' }}>
        Error al cargar los superhéroes: {error.message || 'Error desconocido'}
      </Alert>
    );
  }

  // Calcular el total de páginas. data.length es el total de elementos, pageSize es los elementos por página
  const totalPages = data ? Math.ceil(data.length / pageSize) : 0;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        Lista de Superhéroes
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
        <Pagination
          count={totalPages}
          page={page + 1}
          onChange={handlePageChange}
          color="primary"
          size="large"
          sx={{ mx: 'auto' }}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="page-size-select-label">Héroes por página</InputLabel>
          <Select
            labelId="page-size-select-label"
            value={pageSize}
            label="Héroes por página"
            onChange={handlePageSizeChange}
          >
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={4}>
        {data && data.items && data.items.map((hero) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={hero.id}>
            <HeroCard hero={hero} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
        <Pagination
          count={totalPages}
          page={page + 1}
          onChange={handlePageChange}
          color="primary"
          size="large"
        />
      </Box>
    </Container>
  );
}