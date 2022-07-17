import '@testing-library/jest-dom';
import App from '../App';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Tests page rendering through routes on App', () => {
  it('Tests if it is possible to access the Home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  })
})