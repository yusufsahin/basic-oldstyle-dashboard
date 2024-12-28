import React from 'react';

const Analytics: React.FC = () => {
  const stats = [
    { label: 'Total Users', value: '1,234' },
    { label: 'Active Sessions', value: '567' },
    { label: 'Revenue', value: '$12,345' },
  ];

  return (
    <div>
      <h1>Analytics</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
        {stats.map((stat, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.label}>{stat.label}</h3>
            <p style={styles.value}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as const,
  },
  label: {
    fontSize: '16px',
    color: '#555',
  },
  value: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default Analytics;
