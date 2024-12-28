import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; {new Date().getFullYear()} My Dashboard. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#3498db', // Header ve Sidebar ile aynı renk
    color: '#ffffff',
    textAlign: 'center' as const,
    padding: '15px 20px',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
  },
  text: {
    fontSize: '14px',
    margin: 0,
  },
};

export default Footer;

