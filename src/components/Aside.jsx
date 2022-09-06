import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/Aside.css';
import Drawer from '@mui/material/Drawer';
import cv from '../helpers/airel-curriculo.pdf';

export default function Aside({ showAside, setShowAside }) {
  return (
    <Drawer
      open={showAside}
      anchor="left"
      onClose={() => setShowAside(false)}
      className="teste"
    >
      <div className="aside">
        <Link to="/" onClick={() => setShowAside(false)}>
          <img
            src="https://img.icons8.com/nolan/512/home.png"
            alt="home-icon"
            className="aside-icons"
          />
          <p>Home</p>
        </Link>
        <Link to="/skills" onClick={() => setShowAside(false)}>
          <img
            src="https://img.icons8.com/nolan/512/maintenance.png"
            alt="skills-icon"
            className="aside-icons"
          />
          <p>Habilidades</p>
        </Link>
        <Link to="/projects" onClick={() => setShowAside(false)}>
          <img
            src="https://img.icons8.com/nolan/512/code--v2.png"
            alt="projects-icon"
            className="aside-icons"
          />
          <p>Projetos</p>
        </Link>
        <a href={cv} download="airel-ribeiro-CV" onClick={() => setShowAside(false)}>
          <img
            src="https://img.icons8.com/nolan/512/open-resume.png"
            alt="cv-icon"
            className="aside-icons"
          />
          <p>Currículo</p>
        </a>
        <Link to="/contact" onClick={() => setShowAside(false)}>
          <img
            src="https://img.icons8.com/nolan/512/apple-contacts.png"
            alt="contact-icon"
            className="aside-icons"
          />
          <p>Contato</p>
        </Link>
      </div>
    </Drawer>
  );
}

Aside.propTypes = {
  showAside: PropTypes.bool.isRequired,
  setShowAside: PropTypes.func.isRequired,
};
