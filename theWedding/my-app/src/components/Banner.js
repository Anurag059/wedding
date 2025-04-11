import React from 'react';

function Banner() {
  return (
    <div style={{
      background: 'url(https://images.unsplash.com/photo-1520975892441-38a1b8e8e8f4?auto=format&fit=crop&w=1400&q=80) no-repeat center center/cover',
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
      padding: '1rem',
      textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
    }}>
      <h1 style={{ fontSize: '2.5rem', maxWidth: '90%' }}>Welcome to Your Dream Wedding</h1>
    </div>
  );
}

export default Banner;
