
import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import HomeScreen from './HomeScreen';
import MapView from './MapView';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const INITIAL_CENTER = [
  -122.009102,
  37.334606
];
const INITIAL_ZOOM = 10;

function App() {
  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      {showRegister ? (
        <RegisterScreen onRegister={() => { setShowRegister(false); setShowLogin(true); }} />
      ) : showLogin ? (
        <LoginScreen onLogin={() => { setShowLogin(false); setShowHome(true); }} onShowRegister={() => { setShowLogin(false); setShowRegister(true); }} />
      ) : showHome ? (
        <HomeScreen onStart={() => setShowHome(false)} />
      ) : (
        <MapView center={center} zoom={zoom} setCenter={setCenter} setZoom={setZoom} />
      )}
      {(showLogin || showRegister) && (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          {showLogin ? (
            <span>Don't have an account? <button onClick={() => { setShowLogin(false); setShowRegister(true); }}>Register</button></span>
          ) : (
            <span>Already have an account? <button onClick={() => { setShowRegister(false); setShowLogin(true); }}>Login</button></span>
          )}
        </div>
      )}
    </>
  );
}

export default App;