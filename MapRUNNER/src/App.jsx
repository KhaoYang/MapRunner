
import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import HomeScreen from './HomeScreen';
import MapView from './MapView';
import LoginScreen from './LoginScreen';

const INITIAL_CENTER = [
  -122.009102,
  37.334606
];
const INITIAL_ZOOM = 10;

function App() {
  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);
  const [showLogin, setShowLogin] = useState(true);
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      {showLogin ? (
        <LoginScreen onLogin={() => { setShowLogin(false); setShowHome(true); }} />
      ) : showHome ? (
        <HomeScreen onStart={() => setShowHome(false)} />
      ) : (
        <MapView center={center} zoom={zoom} setCenter={setCenter} setZoom={setZoom} />
      )}
    </>
  );
}

export default App;