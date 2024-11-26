'use client';

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../../components/Map"), { ssr: false }); // Disable SSR for Leaflet

export default function Map() {
  return (
    <main>
      {/* <h1>Welcome to the Map App</h1> */}

      <MapComponent />
    </main>
  );
}