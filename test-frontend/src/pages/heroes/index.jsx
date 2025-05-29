// src/pages/heroes/index.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

export function HeroesListPage() {
  return (
    <Box>
      <Typography variant="h4" component="h1">
        Lista de Superhéroes (en construcción)
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Aquí se mostrará la lista de héroes.
      </Typography>
    </Box>
  );
}