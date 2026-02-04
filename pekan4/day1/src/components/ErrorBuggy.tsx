// BuggyComponent.tsx
import React from 'react';

export default function BuggyComponent() {
  const crash = true;

  if (crash) {
    throw new Error('Komponen ini sengaja error 💥');
  }

  return <div>Ini gak bakal pernah tampil</div>;
}