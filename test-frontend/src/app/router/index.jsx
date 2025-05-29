import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../../App';
import { HeroesListPage } from '../../pages/heroes';
import { HeroDetailsPage } from '../../pages/hero-details';

// Página 404
const NotFoundPage = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>404 - Página No Encontrada</h1>
    <p>Lo sentimos, la página que buscas no existe.</p>
    <Link to="/">Volver al inicio</Link>
  </div>
);

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HeroesListPage />} />
          <Route path="hero/:id" element={<HeroDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}