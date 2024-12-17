'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

export default function Map() {
  // Define custom icon with proper alignment
  const icon = L.icon({
    iconUrl: '/logos/marker-icon.png', // Path to your custom marker icon
    iconSize: [25, 41], // Size of the icon [width, height]
    iconAnchor: [12, 41], // Anchor point for the icon (aligned to the bottom-center)
  });

  const position = [23.7438111, 90.3665748]; // Latitude and longitude of the marker

  return (
    <main>
      <MapContainer
        center={position} // Center the map on the marker
        zoom={13}
        style={{ height: '40vh', width: '100vw' }} // Full-page map
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={icon} draggable={false}>
          <Popup>
            <b>Tonoya</b>
            <br />270, Sultanganj Road, Rayer Bazar, Dhanmondi, Dhaka
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
}
