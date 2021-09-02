/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import { Row, Col } from 'antd';
import React from 'react';
// import ReactDOM from 'react-dom';

import ReactMapGL, {
  Source, Layer, SVGOverlay, Marker,
} from 'react-map-gl';
import Image from 'next/image';

const normalize = require('normalize-number');

const mapBoxToken = 'pk.eyJ1IjoicmF2ZW45OXAiLCJhIjoiY2tzdDAwOHBwMHU0aTMxcG5wdWZ0OW9mMSJ9.Pnc_9xkS8B72aotWuUEoiQ';

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
    lineWidth: 30,
  },
  geometry: {
    type: 'LineString',
    coordinates: [
      [67.11609097547581, 28.489722644602324],
      [28.489722644602324, 67.11609097547581],
    ],
  },
};
// const makeGeoJSON = (data) => ({
//   type: 'FeatureCollection',
//   features: data.map((feature) => ({
//     type: 'Feature',
//     properties: {
//       id: feature.name,
//       value: feature.value,
//     },
//     geometry: {
//       type: 'Point',
//       coordinates: [feature.latitude, feature.longitude],
//     },
//   })),
// });
const makeGeoJSON = (data) => ({
  type: 'FeatureCollection',
  features: data.map((client) => {
    client.ipCount.map((item) => ({
      type: 'Feature',
      properties: {
        id: client.lat,
        value: client.lat,
        lineWidth: item.width,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [client.long, client.lat],
          [item.coordinates.long, item.coordinates.lat],
        ],
      },
    }));
  }),
});

export default function MapChart({ data }) {
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

  // console.log('json structure:', myGeoJSONData);

  // const [viewport, setViewport] = useState({
  //   width: 400,
  //   height: 400,
  //   latitude: 37.9838,
  //   longitude: 23.7275,
  //   zoom: 8,
  // });
  const { countWithIps, ipCoordinates } = data;
  // console.log('this is ip count', countWithIps);
  const clearCoordinates = ipCoordinates.map((item) => ({
    ip: item.query,
    lat: item.lat,
    long: item.lon,
  }));
  // console.log('clear coo', clearCoordinates);
  countWithIps.map((client) => client.ipCount.map((item) => {
    const { lat, long } = clearCoordinates.filter((ipIter) => ipIter.ip === item.ip)[0];
    item.coordinates = { lat, long };
    item.width = normalize([0, 30], item.count);
  }));

  // console.log(countWithIps);
  const [viewport, setViewport] = React.useState({
    latitude: 21.823189401709563,
    longitude: 38.31372289601443,
    zoom: 2,
  });
  // const myGeoJSONData = makeGeoJSON(countWithIps);
  // console.log(myGeoJSONData);
  const lineArray = [];
  countWithIps.map((clientItter) => {
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
  // console.log(lineArray);
  const multipleLines = {
    type: 'FeatureCollection',
    features: lineArray,
  };
  // const temp = countWithIps[0].map((client) => {
  //   client.ipCount.map((item) => ({
  //     type: 'Feature',
  //     properties: {
  //       id: client.ip,
  //       value: client.ip,
  //       lineWidth: item.width,
  //     },
  //     geometry: {
  //       type: 'LineString',
  //       coordinates: [
  //         [client.long, client.lat],
  //         [item.coordinates.long, item.coordinates.lat],
  //       ],
  //     },
  //   }));
  // });
  // console.log(temp);
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
