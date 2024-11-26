'use client';

import dynamic from 'next/dynamic';

// Dynamically import the editor with SSR disabled
const EditorConvertToHTML = dynamic(() => import('./EditorConvertToHTML'), {
  ssr: false,
});

export default function Page() {
  return (
    <div>
      <h1>WYSIWYG Editor</h1>
      <EditorConvertToHTML />
    </div>
  );
}