// src/pages/hero-details/index.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export function HeroDetailsPage() {
  const { id } = useParams();
  return (
    <Box>
      <Typography variant="h4" component="h1">
        Detalles del Superhéroe (en construcción)
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Mostrando detalles para el héroe con ID: {id}
      </Typography>
    </Box>
  );
}