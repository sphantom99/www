/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import dynamic from 'next/dynamic';
import axios from 'axios';
import MapChart from '../components/MapChart';

export async function getServerSideProps() {
  const info = await axios
    .get('http://localhost:3000/api/getDistinctIps')
    .then((response) => {
      if (response.status === 200) {
        // console.log(response.data);
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
  return {
    props: {
      info,
    },
  };
}

export default function map(props) {
  // const Map = dynamic(
  //   () => import('../components/MapChart'),
  //   {
  //     loading: () => <p>A map is loading</p>,
  //     ssr: false, // This line is important. It's what prevents server-side render
  //   },
  // );
  // return <Map />;

  return <MapChart data={props.info} />;
}
