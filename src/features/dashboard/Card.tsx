import React from 'react';

interface CardProps {
  title: string;
  value: string;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px' }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Card;
