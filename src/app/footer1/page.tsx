// Import Footer dynamically to disable SSR
'use client';

import dynamic from 'next/dynamic';

const FooterComponent = dynamic(() => import('./Footer'), { ssr: false });

export default function Footer() {
  return (
    <div>
      <h1>Your Page Content</h1>
      {/* Your page content goes here */}

      {/* Load Footer only on the client side */}
      <FooterComponent />
    </div>
  );
}
