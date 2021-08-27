/* eslint-disable react/jsx-props-no-spreading */
import { Row, Col } from 'antd';
import React, { useEffect, useState, useMemo } from 'react';
// import ReactDOM from 'react-dom';

import ReactMapGL, { Source, Layer, SVGOverlay } from 'react-map-gl';

const mapBoxToken =
  'pk.eyJ1IjoicmF2ZW45OXAiLCJhIjoiY2tzdDAwOHBwMHU0aTMxcG5wdWZ0OW9mMSJ9.Pnc_9xkS8B72aotWuUEoiQ';

const lineData1 = {
  type: 'Feature',
  properties: {
    id: 'line1',
    value: 3,
    lineWidth: 5,
  },
  geometry: {
    type: 'LineString',
    coordinates: [
      [21.823189401709563, 38.31372289601443],
      [-43.94545577561792, -19.892708046419692],
    ],
  },
};
const lineData2 = {
  type: 'Feature',
  properties: {
    id: 'line2',
    value: 10,
    lineWidth: 10,
  },
  geometry: {
    type: 'LineString',
    coordinates: [
      [67.11609097547581, 28.489722644602324],
      [28.489722644602324, 67.11609097547581],
    ],
  },
};
const multipleLines = {
  type: 'FeatureCollection',
  features: [lineData1, lineData2],
};
const makeGeoJSON = (data) => ({
  type: 'FeatureCollection',
  features: data.map((feature) => ({
    type: 'Feature',
    properties: {
      id: feature.name,
      value: feature.value,
    },
    geometry: {
      type: 'Point',
      coordinates: [feature.latitude, feature.longitude],
    },
  })),
});

export default function MapChart() {
  // const [isBrowser, setIsBrowser] = useState(false);
  // useEffect(() => {
  //   setIsBrowser(true);
  // }, []);

  // if (!isBrowser) {
  //   return null;
  // }
  // const rawData = [
  //   {
  //     name: 'Home',
  //     value: 2,
  //     latitude: 21.823189401709563,
  //     longitude: 38.31372289601443,
  //   },
  //   {
  //     name: 'Feature 2',
  //     value: 5,
  //     latitude: -43.94545577561792,
  //     longitude: -19.892708046419692,
  //   },
  // ];

  // const myGeoJSONData = makeGeoJSON(rawData);
  // console.log('json structure:', myGeoJSONData);

  // const [viewport, setViewport] = useState({
  //   width: 400,
  //   height: 400,
  //   latitude: 37.9838,
  //   longitude: 23.7275,
  //   zoom: 8,
  // });
  const [viewport, setViewport] = React.useState({
    latitude: 21.823189401709563,
    longitude: 38.31372289601443,
    zoom: 2,
  });
  return (
    <Row type="flex" justify="center" align="middle">
      <Col>
        <ReactMapGL
          {...viewport}
          id="map"
          width="1300px"
          height="1000px"
          onViewportChange={setViewport}
          mapboxApiAccessToken={mapBoxToken}
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
        </ReactMapGL>
      </Col>
    </Row>
  );
}
