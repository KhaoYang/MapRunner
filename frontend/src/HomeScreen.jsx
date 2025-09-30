import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <div className="home-screen">
      <h1>Welcome to MapRunner</h1>
      <p>Click below to start exploring the map.</p>
      <button style={{padding: '10px 20px', fontSize: '1.2em'}} onClick={() => navigate('/map')}>Start</button>
    </div>
  );
}

export default HomeScreen;
