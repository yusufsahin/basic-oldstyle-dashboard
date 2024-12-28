import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.logoContainer}>
        <h2 style={styles.logo}>Dashboard</h2>
      </div>
      <nav style={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          🏠 Dashboard
        </NavLink>
        <NavLink
          to="/forms"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          📝 Forms
        </NavLink>
        <NavLink
          to="/tables"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          📊 Tables
        </NavLink>
        <NavLink
          to="/analytics"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          📈 Analytics
        </NavLink>
      </nav>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '280px',
    backgroundColor: '#3498db', // Header ile aynı renk
    color: '#ffffff',
    height: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
    boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
  },
  logoContainer: {
    textAlign: 'center' as const,
    marginBottom: '30px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
  },
  link: {
    display: 'flex',
    alignItems: 'center' as const,
    fontSize: '16px',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  activeLink: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    fontWeight: 'bold',
    transform: 'scale(1.05)',
  },
};

export default Sidebar;

