// src/app/router/index.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa el componente App que actúa como el layout principal de la aplicación
import App from '../../App';

// Importa las páginas de tus características (que se encuentran en la capa 'pages')
// Necesitas crear estos archivos vacíos por ahora si no existen.
// src/pages/heroes/index.jsx
import { HeroesListPage } from '../../pages/heroes';
// src/pages/hero-details/index.jsx
import { HeroDetailsPage } from '../../pages/hero-details';

// Componente simple para la página 404 (No Encontrado)
const NotFoundPage = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>404 - Página No Encontrada</h1>
    <p>Lo sentimos, la página que buscas no existe.</p>
    <Link to="/">Volver al inicio</Link>
  </div>
);

/**
 * Componente principal de enrutamiento de la aplicación.
 * Define las rutas de alto nivel y sus componentes asociados.
 */
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* La ruta padre "/" usa el componente App (nuestro layout global) */}
        <Route path="/" element={<App />}>
          {/*
            Rutas anidadas que se renderizarán dentro del <Outlet /> de App.jsx
            'index' significa que esta es la ruta por defecto cuando el path es exactamente "/"
          */}
          <Route index element={<HeroesListPage />} />

          {/* Ruta para ver los detalles de un superhéroe.
              ':id' es un parámetro de URL que se puede leer en HeroDetailsPage.
          */}
          <Route path="hero/:id" element={<HeroDetailsPage />} />

          {/*
            Ruta comodín para cualquier URL que no coincida con las anteriores.
            Siempre debe ser la última ruta.
          */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}