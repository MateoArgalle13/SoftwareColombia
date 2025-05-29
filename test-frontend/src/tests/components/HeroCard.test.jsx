import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeroCard from '../../components/HeroCard'; 
import { vi } from 'vitest';

// Mock de useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Datos de prueba para un héroe
const mockHero = {
  id: '1',
  name: 'Superman',
  images: { md: 'http://example.com/superman.jpg' },
  powerstats: {
    intelligence: 94, strength: 100, speed: 100, durability: 100, power: 100, combat: 85,
  },
};

// Wrapper para los componentes que necesitan React Router (BrowserRouter)
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('HeroCard', () => {
  beforeEach(() => {
    mockNavigate.mockReset();
  });

  it('renders hero name and image', () => {
    renderWithRouter(<HeroCard hero={mockHero} />);

    expect(screen.getByText('Superman')).toBeInTheDocument();

    const image = screen.getByAltText('Superman');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'http://example.com/superman.jpg');
  });

  it('navigates to hero details on card click', async () => {
    renderWithRouter(<HeroCard hero={mockHero} />);

    const clickableCardArea = screen.getByRole('button', { name: /superman/i }); 
    fireEvent.click(clickableCardArea);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/hero/1');
    });
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  it('navigates to hero details on "VER MÁS" button click', async () => {
    renderWithRouter(<HeroCard hero={mockHero} />);

    const viewMoreButton = screen.getByRole('button', { name: 'VER MÁS' });
    fireEvent.click(viewMoreButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/hero/1');
    });
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});