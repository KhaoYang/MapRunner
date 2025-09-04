import React from 'react';

function HomeScreen({ onStart }) {
  return (
    <div className="home-screen">
      <h1>Welcome to MapRunner</h1>
      <p>Click below to start exploring the map.</p>
      <button onClick={onStart} style={{padding: '10px 20px', fontSize: '1.2em'}}>Start</button>
    </div>
  );
}

export default HomeScreen;
