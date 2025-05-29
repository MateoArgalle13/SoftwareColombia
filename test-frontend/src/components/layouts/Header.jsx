import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Stack,
} from '@mui/material';

//Iconos
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {
            
        }
        <Stack direction="row" spacing={2} alignItems="center" sx={{ flexGrow: 1, minWidth: 'fit-content' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
            <EmailIcon sx={{ mr: 0.5 }} />
            <Typography variant="body2">
              info@software-colombia.com
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
            <PhoneIcon sx={{ mr: 0.5 }} />
            <Typography variant="body2">
              +(57)(601) 398-2152
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ flexGrow: 0, minWidth: 'fit-content' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/">
              Superheroes App
            </Button>
          </Typography>
          <Typography variant="body2" sx={{ ml: 2 }}>
            Síguenos
          </Typography>
          <IconButton color="inherit" href="https://www.facebook.com/Softwarecolombia" target="_blank" rel="noopener">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com/software_col" target="_blank" rel="noopener">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/company/software-colombia-sas" target="_blank" rel="noopener">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.youtube.com/c/softwarecolombia" target="_blank" rel="noopener">
            <YouTubeIcon />
          </IconButton>
          <Button color="inherit" startIcon={<LanguageIcon />}>
            EN
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;