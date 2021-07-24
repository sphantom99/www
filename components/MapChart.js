import React from 'react';
import {
  ComposableMap, Geographies, Geography, Annotation,
} from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

export default function MapChart() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-20.0, -52.0, 0],
        scale: 700,
      }}
    >
      <Geographies geography={geoUrl} fill="#d4b577" stroke="#6a9dcc" strokeWidth={0.5}>
        {({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)}
      </Geographies>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: '#FF5533',
          strokeWidth: 3,
          strokeLinecap: 'round',
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          Paris
        </text>
      </Annotation>
    </ComposableMap>
  );
}
