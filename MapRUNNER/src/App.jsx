import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css'

const INITIAL_CENTER = [
  -122.009102,
  37.334606
]
const INITIAL_ZOOM = 15

function App() {
  const mapRef = useRef()
  const mapContainerRef = useRef()

  const [center, setCenter] = useState(INITIAL_CENTER)
  const [zoom, setZoom] = useState(INITIAL_ZOOM)
  const [showHome, setShowHome] = useState(true)

  useEffect(() => {
    if (showHome) return;
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: zoom,
      style: 'mapbox://styles/khaoyang/cmf5t9p4n001d01s76vb1fjnc'
    })

    mapRef.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      })
    )

    mapRef.current.on('move', () => {
      const mapCenter = mapRef.current.getCenter()
      const mapZoom = mapRef.current.getZoom()
      setCenter([ mapCenter.lng, mapCenter.lat ])
      setZoom(mapZoom)
    })

    return () => {
      mapRef.current.remove()
    }
  }, [showHome])

  return (
    <>
      {showHome ? (
        <div className="home-screen" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
          <h1>Welcome to MapRunner</h1>
          <p>Click below to start exploring the map.</p>
          <button onClick={() => setShowHome(false)} style={{padding: '10px 20px', fontSize: '1.2em'}}>Start</button>
        </div>
      ) : (
        <>
          <div className="sidebar">
            Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)}
          </div>
          <div id='map-container' ref={mapContainerRef} />
        </>
      )}
    </>
  )
}

export default App