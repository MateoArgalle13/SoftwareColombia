import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
  Typography,
  Box,
  Button,
} from '@mui/material';

import './HeroCard.scss';


function HeroCard({ hero }) {
  const navigate = useNavigate();

  // Función para navegar a la página de detalles del héroe al hacer clic en la tarjeta
  const handleCardClick = () => {
    navigate(`/hero/${hero.id}`);
  };

  // Función para navegar a la página de detalles del héroe al hacer clic en el botón
  const handleViewMoreClick = (event) => {
    event.stopPropagation();
    navigate(`/hero/${hero.id}`);
  };

  return (
    <Card className="hero-card" sx={{ borderRadius: 2, boxShadow: 3 }}>
      <Box onClick={handleCardClick} role="button" tabIndex={0}  className="hero-card__clickable-area">
        <CardMedia
          component="img"
          className="hero-card__media"
          image={hero.images.md}
          alt={hero.name}
        />
        <Box className="hero-card__initial-content">
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {hero.name}
          </Typography>
        </Box>
        <Box className="hero-card__hover-content">
          <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
            Poderes:
          </Typography>
          <ul className="hero-card__powers-list">
            {Object.entries(hero.powerstats).map(([stat, value]) => (
              <li key={stat}>
                <Typography variant="body2">{stat}: {value}</Typography>
              </li>
            ))}
          </ul>
          <Button
            variant="contained"
            className="hero-card__button"
            onClick={handleViewMoreClick}
            sx={{
              mt: 2,
              backgroundColor: '#FFD700',
              color: '#333',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#FFC400',
              },
            }}
          >
            VER MÁS
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default HeroCard;