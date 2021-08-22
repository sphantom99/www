/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Card } from 'antd';

export default function MapChart() {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <Card title="Statistics" extra={<a href="/user">Report a problem</a>} style={{ width: 800 }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: 600, width: 700 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup.
            {' '}
            <br />
            {' '}
            Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Card>
  );
}
