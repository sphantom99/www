import React from 'react';
import axios from 'axios';
import MapChart from '../components/MapChart';

export async function getServerSideProps() {
  const info = await axios
    .get('http://localhost:3000/api/getDistinctIps')
    .then((response) => {
      if (response.status === 200) {
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
  return <MapChart data={props.info} />;
}
