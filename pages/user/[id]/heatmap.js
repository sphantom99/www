/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import { Row, Col } from 'antd';
import React, { useState } from 'react';
import MapGL, { Source, Layer } from 'react-map-gl';
import { getUniqueIps } from '../../../lib/dao';

const heatmapLayer = {
  maxzoom: 9,
  type: 'heatmap',
  paint: {
    'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],
    'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0,
      'rgba(33,102,172,0)',
      0.2,
      'rgb(103,169,207)',
      0.4,
      'rgb(209,229,240)',
      0.6,
      'rgb(253,219,199)',
      0.8,
      'rgb(239,138,98)',
      0.9,
      'rgb(255,201,101)',
    ],
    'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20],
    'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0],
  },
};
export async function getServerSideProps(context) {
  console.log(context.query.id);
  const uniqueIps = await getUniqueIps(context.query.id);
  return {
    props: { uniqueIps },
  };
}
export default function heatmap(props) {
  const { uniqueIps } = props;
  const data = uniqueIps.map((item) => ({
    type: 'Feature',
    properties: {
      id: 'paulihno',
      mag: 1.7,
    },
    geometry: {
      type: 'Point',
      coordinates: [item.long, item.lat],
    },
  }));
  const format = {
    type: 'FeatureCollection',
    crs: {
      type: 'name',
      properties: {},
    },
    features: data,
  };
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3,
    bearing: 0,
    pitch: 0,
  });
  return (
    <Row type="flex" justify="center" align="middle">
      <Col>
        <MapGL
          {...viewport}
          width="1300px"
          height="1000px"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={setViewport}
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_REACT_MAP_GL}
        >
          {format && (
            <Source type="geojson" data={format}>
              <Layer {...heatmapLayer} />
            </Source>
          )}
        </MapGL>
      </Col>
    </Row>
  );
}
