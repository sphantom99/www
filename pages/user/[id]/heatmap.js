/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import { Row, Col } from 'antd';
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import MapGL, { Source, Layer } from 'react-map-gl';
import { uniq } from 'lodash';
import { getUniqueIps } from '../../../lib/dao';

function filterFeaturesByDay(featureCollection, time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const features = featureCollection.features.filter((feature) => {
    const featureDate = new Date(feature.properties.time);
    return (
      featureDate.getFullYear() === year
      && featureDate.getMonth() === month
      && featureDate.getDate() === day
    );
  });
  return { type: 'FeatureCollection', features };
}

const heatmapLayer = {
  maxzoom: 9,
  type: 'heatmap',
  paint: {
    // Increase the heatmap weight based on frequency and property magnitude
    'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],
    // Increase the heatmap color weight weight by zoom level
    // heatmap-intensity is a multiplier on top of heatmap-weight
    'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
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
    // Adjust the heatmap radius by zoom level
    'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20],
    // Transition from heatmap to circle layer by zoom level
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
  //   const [allDays, useAllDays] = useState(true);
  //   const [timeRange, setTimeRange] = useState([0, 0]);
  //   const [selectedTime, selectTime] = useState(0);
  //   const [earthquakes, setEarthQuakes] = useState(null);

  //   useEffect(() => {
  //     fetch('https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson')
  //       .then((resp) => resp.json())
  //       .then((json) => {
  //         const { features } = json;
  //         const endTime = features[0].properties.time;
  //         const startTime = features[features.length - 1].properties.time;

  //         setTimeRange([startTime, endTime]);
  //         setEarthQuakes(json);
  //         selectTime(endTime);
  //       });
  //   }, []);

  //   const data = useMemo(
  //     () => (allDays ? earthquakes : filterFeaturesByDay(earthquakes, selectedTime)),
  //     [earthquakes, allDays, selectedTime],
  //   );
  const test = {
    type: 'FeatureCollection',
    crs: {
      type: 'name',
      properties: {
        name: 'urn:ogc:def:crs:OGC:1.3:CRS84',
      },
    },
    features: [
      {
        type: 'Feature',
        properties: {
          id: 'ak16994521',
          mag: 2.3,
        },
        geometry: {
          type: 'Point',
          coordinates: [-151.5129, 63.1016],
        },
      },
      {
        type: 'Feature',
        properties: {
          id: 'ak16994519',
          mag: 1.7,
        },
        geometry: {
          type: 'Point',
          coordinates: [-150.4048, 63.1224],
        },
      },
    ],
  };
  console.log(uniqueIps);
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
