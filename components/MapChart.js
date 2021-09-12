/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import { Row, Col } from 'antd';
import React from 'react';

import ReactMapGL, {
  Source, Layer, SVGOverlay, Marker,
} from 'react-map-gl';
import Image from 'next/image';

const normalize = require('normalize-number');

export default function MapChart({ data }) {
  const { ipsPerClientCoordinatesWithCount, ipapiCoordinateResponse } = data;
  const clearCoordinates = ipapiCoordinateResponse.map((item) => ({
    ip: item.query,
    lat: item.lat,
    long: item.lon,
  }));
  ipsPerClientCoordinatesWithCount.map((client) => client.ipCount.map((item) => {
    const { lat, long } = clearCoordinates.filter((ipIter) => ipIter.ip === item.ip)[0];
    item.coordinates = { lat, long };
    item.width = normalize([0, 100], item.count);
  }));

  const [viewport, setViewport] = React.useState({
    latitude: 21.823189401709563,
    longitude: 38.31372289601443,
    zoom: 2,
  });

  const lineArray = [];
  ipsPerClientCoordinatesWithCount.map((clientItter) => {
    clientItter.ipCount.map((item) => {
      lineArray.push({
        type: 'Feature',
        properties: {
          id: clientItter.lat,
          value: clientItter.lat,
          lineWidth: item.width,
        },
        geometry: {
          type: 'LineString',
          coordinates: [
            [clientItter.client.long, clientItter.client.lat],
            [item.coordinates.long, item.coordinates.lat],
          ],
        },
      });
    });
  });
  const multipleLines = {
    type: 'FeatureCollection',
    features: lineArray,
  };
  return (
    <Row type="flex" justify="center" align="middle">
      <Col>
        <ReactMapGL
          {...viewport}
          id="map"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          width="1300px"
          height="1000px"
          onViewportChange={setViewport}
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_REACT_MAP_GL}
        >
          <Source id="polylineLayer" type="geojson" data={multipleLines}>
            <Layer
              id="lineLayer"
              type="line"
              source="polylineLayer"
              layout={{
                'line-join': 'round',
                'line-cap': 'round',
              }}
              paint={{
                'line-color': 'rgba(3, 170, 238, 0.5)',
                'line-width': ['get', 'lineWidth'],
              }}
            />
          </Source>
          {clearCoordinates.map((item) => (
            <Marker latitude={item.lat} longitude={item.long} offsetLeft={-14} offsetTop={-30}>
              <Image src="/mapMarker.png" height={30} width={30} alt="Picture of the author" />
            </Marker>
          ))}
        </ReactMapGL>
      </Col>
    </Row>
  );
}
