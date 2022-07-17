import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Tests page rendering through routes on App', () => {
  it('Tests if it is possible to access the Home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
  it('Tests iif it is possible to access the Contact page', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
  it('Tests if it is possible to access the Projects page', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });
});
