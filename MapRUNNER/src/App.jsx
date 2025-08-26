import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import './App.css'

function App() {
  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhb3lhbmciLCJhIjoiY21lcnhld2N3MGMwcjJpcTZtNWxqNHAxYiJ9.mDZuEmUsH2Z16QPAhDRcBg'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
  });
    return () => {
      mapRef.current.remove()
    }
  },[])
  
  return (
    <>
      <div id = 'map-container' ref = {mapContainerRef}/>
    </>
  )
}

export default App
