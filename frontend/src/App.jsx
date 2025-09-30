
import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import HomeScreen from './HomeScreen';
import MapView from './MapView';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const INITIAL_CENTER = [
  -122.009102,
  37.334606
];
const INITIAL_ZOOM = 10;

function App() {
  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/map" element={<MapView center={center} zoom={zoom} setCenter={setCenter} setZoom={setZoom} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;