import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { GiHamburgerMenu } from "react-icons/gi";

function MapView({ center, zoom, setCenter, setZoom }) {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: zoom,
      style: 'mapbox://styles/khaoyang/cmf5t9p4n001d01s76vb1fjnc'
    });

    mapRef.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      })
    );

    mapRef.current.on('move', () => {
      const mapCenter = mapRef.current.getCenter();
      const mapZoom = mapRef.current.getZoom();
      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <>
      {/* Navigation Sidebar */}
      <div className={`nav-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <h2>Navigation</h2>
        <ul>
          <li>
            <button className="nav-item-btn">
              Profile
            </button>
          </li>
          <li>
            <button className="nav-item-btn">
              My Restaurants
            </button>
          </li>
          <li>
            <button className="nav-item-btn">
              Wishlist
            </button>
          </li>
          <li>
            <button className="nav-item-btn">
              Settings
            </button>
          </li>
        </ul>
      </div>
      
      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}
      
      <div className="sidebar">
        Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)}
      </div>
      <div id="map-container" ref={mapContainerRef} />
      <button className="hamburger-btn" onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </button>
    </>
  );
}

export default MapView;
