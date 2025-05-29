import React from 'react';
import { Box, Typography, Link, Grid, IconButton, Container } from '@mui/material';

// Iconos
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import SoftwareColombiaLogo from '../../assets/software-colombia-logo.png'; 

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#e0f2f7', 
        color: '#333', 
        py: { xs: 4, md: 6 }, 
        mt: 'auto', 
        position: 'relative', 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
              <img
                src={SoftwareColombiaLogo}
                alt="Software Colombia Logo"
                style={{ width: '150px', marginBottom: '16px' }}
              />
              <Typography variant="body2" sx={{ mb: 1, textAlign: { xs: 'center', md: 'left' } }}>
                Nit. 900.364.710-8
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
                Régimen Común Actividad Económica 6201
              </Typography>
              <Box>
                <IconButton color="inherit" href="https://www.facebook.com/Softwarecolombia" target="_blank" rel="noopener" sx={{ color: '#039be5' }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" href="https://twitter.com/software_col" target="_blank" rel="noopener" sx={{ color: '#039be5' }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.youtube.com/0" target="_blank" rel="noopener" sx={{ color: '#039be5' }}>
                  <YouTubeIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.instagram.com/softwarecolombia" target="_blank" rel="noopener" sx={{ color: '#039be5' }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.linkedin.com/company/software-colombia-sas" target="_blank" rel="noopener" sx={{ color: '#039be5' }}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' }, borderBottom: '2px solid #039be5', pb: 1, display: 'inline-block' }}>
              Información de interés
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Typography variant="body2" sx={{ my: 0.5, textAlign: { xs: 'center', md: 'left' } }}>
                Calle 31 Nº. 13A - 51 Torre 1 Oficina 301
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, textAlign: { xs: 'center', md: 'left' } }}>
                Edificio Panorama
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', my: 0.5, textAlign: { xs: 'center', md: 'left' } }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body2">+(57)(601) 308-2152</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', my: 0.5, textAlign: { xs: 'center', md: 'left' } }}>
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body2">info@software-colombia.com</Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 0.5, mb: 1, textAlign: { xs: 'center', md: 'left' } }}>
                Recepción de Facturas
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', my: 0.5, textAlign: { xs: 'center', md: 'left' } }}>
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body2">900364710@scol.com.co</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{
          mt: { xs: 4, md: 6 },
          pt: { xs: 2, md: 3 },
          borderTop: '1px solid rgba(0, 0, 0, 0.12)',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: { xs: 'center', md: 'left' },
        }}>
          <Typography variant="body2">
            © 2021 - © Todos los derechos reservados Software Colombia.
          </Typography>
          <Link href="#" color="inherit" variant="body2" sx={{ mt: { xs: 1, md: 0 } }}>
            Privacidad y tratamiento de datos personales.
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;