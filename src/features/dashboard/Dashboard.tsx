import React from 'react';
import Card from './Card';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <Card title="Total Users" value="1,234" />
        <Card title="Revenue" value="$12,345" />
        <Card title="Orders" value="543" />
      </div>
    </div>
  );
};

export default Dashboard;
