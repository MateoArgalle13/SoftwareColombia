import { Outlet, Link } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.scss'


import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function App() {


  return (
    <>
      <Header />      
      <Box sx={{ flexGrow: 1 }}>        
        <Box component="main" sx={{ p: { xs: 2, md: 3 }, mt: 2 }}>
          <Outlet />
        </Box>
      </Box>
    <Footer />
    </>
  )
}

export default App
