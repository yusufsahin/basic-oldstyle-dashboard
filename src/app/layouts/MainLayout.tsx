import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div style={styles.layout}>
      <Sidebar />
      <div style={styles.content}>
        <Header />
        <div style={styles.main}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

const styles = {
  layout: {
    display: 'flex',
    height: '100vh',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
  },
  main: {
    flex: 1,
    padding: '20px',
  },
};

export default MainLayout;
