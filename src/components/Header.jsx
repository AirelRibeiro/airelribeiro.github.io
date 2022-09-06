import React from 'react';
import { Link } from 'react-router-dom';
import cv from '../helpers/airel-curriculo.pdf';

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://img.icons8.com/nolan/512/home.png"
          alt="home-icon"
          className="header-icons"
        />
      </Link>
      <Link to="/skills">
        <img
          src="https://img.icons8.com/nolan/512/maintenance.png"
          alt="skills-icon"
          className="header-icons"
        />
      </Link>
      <Link to="/projects">
        <img
          src="https://img.icons8.com/nolan/512/code--v2.png"
          alt="projects-icon"
          className="header-icons"
        />
      </Link>
      <a href={cv} download="airel-ribeiro-CV">
        <img
          src="https://img.icons8.com/nolan/512/open-resume.png"
          alt="cv-icon"
          className="header-icons"
        />
      </a>
      <Link to="/contact">
        <img
          src="https://img.icons8.com/nolan/512/apple-contacts.png"
          alt="contact-icon"
          className="header-icons"
        />
      </Link>
    </div>
  );
}
