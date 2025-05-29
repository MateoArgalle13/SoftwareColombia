import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';

// Iconos 
import PermIdentityIcon from '@mui/icons-material/PermIdentity'; 
import BoltIcon from '@mui/icons-material/Bolt'; 
import InfoIcon from '@mui/icons-material/Info'; 
import WorkIcon from '@mui/icons-material/Work'; 
import PeopleIcon from '@mui/icons-material/People'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import { useHeroDetails } from '../../features/heroes/hooks/useHeroDetails';

export function HeroDetailsPage() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { data: hero, isLoading, isError, error } = useHeroDetails(id);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>Cargando detalles del superhéroe...</Typography>
      </Box>
    );
  }

  if (isError) {
    return (
      <Alert severity="error" sx={{ mt: 3, mx: 'auto', width: 'fit-content' }}>
        Error al cargar los detalles del superhéroe: {error.message || 'Error desconocido'}
      </Alert>
    );
  }

  if (!hero) {
    return (
      <Alert severity="info" sx={{ mt: 3, mx: 'auto', width: 'fit-content' }}>
        No se encontró información para este superhéroe.
        <Button onClick={() => navigate('/')} sx={{ ml: 2 }}>Volver a la lista</Button>
      </Alert>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ mb: 3 }}
      >
        Volver a la lista
      </Button>

      <Card sx={{ borderRadius: 2, boxShadow: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <CardMedia
          component="img"
          sx={{ width: { xs: '100%', md: 300 }, objectFit: 'cover', borderRadius: { xs: '8px 8px 0 0', md: '8px 0 0 8px' } }}
          image={hero.images.lg} 
          alt={hero.name}
        />
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
            {hero.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
            Slug: {hero.slug}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PermIdentityIcon sx={{ mr: 1, color: 'primary.main' }} /> Apariencia
              </Typography>
              <List dense>
                <ListItem><ListItemText primary={`Género: ${hero.appearance.gender}`} /></ListItem>
                <ListItem><ListItemText primary={`Raza: ${hero.appearance.race}`} /></ListItem>
                <ListItem><ListItemText primary={`Altura: ${hero.appearance.height[1] || 'N/A'}`} /></ListItem>
                <ListItem><ListItemText primary={`Peso: ${hero.appearance.weight[1] || 'N/A'}`} /></ListItem>
                <ListItem><ListItemText primary={`Color de Ojos: ${hero.appearance['eye-color']}`} /></ListItem>
                <ListItem><ListItemText primary={`Color de Pelo: ${hero.appearance['hair-color']}`} /></ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <BoltIcon sx={{ mr: 1, color: 'primary.main' }} /> Poderes
              </Typography>
              <List dense>
                {Object.entries(hero.powerstats).map(([stat, value]) => (
                  <ListItem key={stat}>
                    <ListItemText primary={`${stat}: ${value}`} />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <InfoIcon sx={{ mr: 1, color: 'primary.main' }} /> Biografía
              </Typography>
              <List dense>
                <ListItem><ListItemText primary={`Nombre Completo: ${hero.biography['full-name']}`} /></ListItem>
                <ListItem><ListItemText primary={`Alter Egos: ${hero.biography['alter-egos']}`} /></ListItem>
                <ListItem><ListItemText primary={`Alias: ${Array.isArray(hero.biography.aliases) ? hero.biography.aliases.join(', ') : hero.biography.aliases}`} /></ListItem>
                <ListItem><ListItemText primary={`Lugar de Nacimiento: ${hero.biography['place-of-birth']}`} /></ListItem>
                <ListItem><ListItemText primary={`Primera Aparición: ${hero.biography['first-appearance']}`} /></ListItem>
                <ListItem><ListItemText primary={`Publicador: ${hero.biography.publisher}`} /></ListItem>
                <ListItem><ListItemText primary={`Alineación: ${hero.biography.alignment}`} /></ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <WorkIcon sx={{ mr: 1, color: 'primary.main' }} /> Trabajo
              </Typography>
              <List dense>
                <ListItem><ListItemText primary={`Ocupación: ${hero.work.occupation}`} /></ListItem>
                <ListItem><ListItemText primary={`Base: ${hero.work.base}`} /></ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PeopleIcon sx={{ mr: 1, color: 'primary.main' }} /> Conexiones
              </Typography>
              <List dense>
                <ListItem><ListItemText primary={`Grupo: ${hero.connections['group-affiliation']}`} /></ListItem>
                <ListItem><ListItemText primary={`Parientes: ${hero.connections.relatives}`} /></ListItem>
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}