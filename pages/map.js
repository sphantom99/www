/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import dynamic from 'next/dynamic';

export default function map() {
  const Map = dynamic(
    () => import('../components/MapChart'), // replace '@components/map' with your component's location
    {
      loading: () => <p>A map is loading</p>,
      ssr: false, // This line is important. It's what prevents server-side render
    },
  );
  return <Map />;
}
