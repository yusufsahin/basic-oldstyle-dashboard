import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>My Dashboard</h1>
      <nav style={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...styles.navLink, ...styles.activeNavLink } : styles.navLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/analytics"
          style={({ isActive }) =>
            isActive ? { ...styles.navLink, ...styles.activeNavLink } : styles.navLink
          }
        >
          Analytics
        </NavLink>
        <NavLink
          to="/settings"
          style={({ isActive }) =>
            isActive ? { ...styles.navLink, ...styles.activeNavLink } : styles.navLink
          }
        >
          Settings
        </NavLink>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '26px',
    fontWeight: 'bold',
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    fontSize: '16px',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  activeNavLink: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    fontWeight: 'bold',
    transform: 'scale(1.05)',
  },
};

export default Header;
