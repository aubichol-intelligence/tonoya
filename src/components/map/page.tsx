'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet'

//import L from 'leaflet';
//import { Icon } from 'leaflet';

//const Map = dynamic(() => import('../../components/Map'), { ssr: false }); // Disable SSR for Leaflet

export default function Map() {
  //const icon = L.icon({ iconUrl: '/logos/marker-icon.png' });
  return (
    <main>
      {/*<h1>Welcome to the Map App</h1>*/}
      <MapContainer
        center={[23.7438111, 90.3665748]} // Initial map center (latitude, longitude)
        zoom={13}
        key="map-container"
        style={{ height: '40vh', width: '90vw' }} // Full-page map
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[23.7438111, 90.3665748]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
          <Popup>
            <b>Tonoya</b>
            <br />270, Sultanganj Road, Rayer Bazar, Dhanmondi, Dhaka
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
}