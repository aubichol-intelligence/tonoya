'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//import markerIconPng from "leaflet/dist/images/marker-icon.png";
//import {Icon} from 'leaflet'

import L from 'leaflet';
//import { Icon } from 'leaflet';

//const Map = dynamic(() => import('../../components/Map'), { ssr: false }); // Disable SSR for Leaflet

export default function Map() {
  const icon = L.icon({ iconUrl: '/logos/marker-icon.png' });
  return (
    <main>
      {/*<h1>Welcome to the Map App</h1>*/}
      <MapContainer
        center={[23.74336170880335, 90.36605474563903]} // Initial map center (latitude, longitude)
        zoom={13}
        key="map-container"
        style={{ height: '30vh', width: '100vw'}} // Full-page map
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[23.74336170880335, 90.36605474563903]} icon={icon}>
          <Popup>
            <b>Tonoya</b>
            <br />270, Sultanganj Road, Rayer Bazar, Dhanmondi, Dhaka
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
}