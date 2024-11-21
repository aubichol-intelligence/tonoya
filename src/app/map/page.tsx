'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

//const Map = dynamic(() => import('../../components/Map'), { ssr: false }); // Disable SSR for Leaflet

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Map App</h1>
      <MapContainer
        center={[23.7438111, 90.3665748]} // Initial map center (latitude, longitude)
        zoom={13}
        key="map-container"
        style={{ height: '100vh', width: '100%' }} // Full-page map
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[23.7438111, 90.3665748]}>
          <Popup>
            A pretty popup! <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
}