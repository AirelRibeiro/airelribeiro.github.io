import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Aside from '../components/Aside';
import App from '../App';

describe('Tests Aside component and your funcionalites', () => {
  it('Tests if there exists five links in Aside', () => {
    render(
      <MemoryRouter>
        <Aside />
      </MemoryRouter>,
    );
    const navigationLinks = screen.getAllByRole('link');
    expect(navigationLinks).toHaveLength(5);
  });
  it('Tests if the Home link navigate to Home page', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: 'Home' });
    userEvent.click(homeLink);

    expect(screen.getByRole('heading', { name: 'Home' })).toBeInTheDocument();
  });
  it('Tests if the Contact Me link navigate to Contact page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Home' })).toBeInTheDocument();

    const contactLink = screen.getByRole('link', { name: 'Contact Me' });
    userEvent.click(contactLink);

    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();
  });
  it('Tests if the My Projects link navigate to Projects page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Home' })).toBeInTheDocument();

    const projectsLink = screen.getByRole('link', { name: 'My Projects' });
    userEvent.click(projectsLink);

    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
  });
});
