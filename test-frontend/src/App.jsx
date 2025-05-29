import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Box sx={{ flexGrow: 1 }}>
      {/* Barra de Navegación Superior */}
      <AppBar position="static">
        <Toolbar>
          {/* Título de la aplicación que también sirve como enlace a la página principal */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/">
              Superheroes App
            </Button>
          </Typography>
          {/* Aquí podrías añadir otros botones o enlaces de navegación globales si fueran necesarios */}
        </Toolbar>
      </AppBar>

      {/* Contenedor principal para el contenido de las páginas */}
      {/* El <Outlet /> es donde React Router renderizará el componente de la página actual */}
      <Box component="main" sx={{ p: { xs: 2, md: 3 }, mt: 2 }}> {/* Añade padding y margin-top responsivos */}
        <Outlet />
      </Box>
    </Box>
    </>
  )
}

export default App
