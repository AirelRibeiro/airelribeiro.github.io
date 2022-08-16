import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/Aside.css';
import Drawer from '@mui/material/Drawer';

export default function Aside({ showAside, setShowAside }) {
  return (
    <Drawer
      open={showAside}
      anchor="left"
      onClose={() => setShowAside(false)}
      className="teste"
    >
      <div className="aside">
        <Link to="/">
          <img
            src="https://img.icons8.com/nolan/512/home.png"
            alt="home-icon"
            className="aside-icons"
          />
        </Link>
        <Link to="/skills">
          <img
            src="https://img.icons8.com/nolan/512/maintenance.png"
            alt="home-icon"
            className="aside-icons"
          />
        </Link>
        <Link to="/projects">
          <img
            src="https://img.icons8.com/nolan/512/code--v2.png"
            alt="home-icon"
            className="aside-icons"
          />
        </Link>
        <Link to="/contact">
          <img
            src="https://img.icons8.com/nolan/512/apple-contacts.png"
            alt="home-icon"
            className="aside-icons"
          />
        </Link>
      </div>
    </Drawer>
  );
}

Aside.propTypes = {
  showAside: PropTypes.bool.isRequired,
  setShowAside: PropTypes.func.isRequired,
};
