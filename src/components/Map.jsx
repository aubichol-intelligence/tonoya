'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Initial map center (latitude, longitude)
      zoom={13}
      key="map-container"
      style={{ height: '100vh', width: '100%' }} // Full-page map
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty popup! <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
