/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import {
  Row, Col, Card, Space,
} from 'antd';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import Histogram from '../../components/Histogram';
import AdminStatistics from '../../components/AdminStatistics';
import Diagram from '../../components/Diagram';

export async function getServerSideProps() {
  const info = await axios
    .get('http://localhost:3000/api/getAdminStatistics')
    .then((response) => {
      if (response.status === 200) {
        // console.log(response.data);
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
  const diagram = await axios
    .post('http://localhost:3000/api/getAdminStatisticsDiagram')
    .then((response) => {
      if (response.status === 200) {
        // console.log(response.data);
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
  const histogram = await axios
    .post('http://localhost:3000/api/getHistogram', { histogramFilter: [] })
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
      histogram,
      diagram,
      method: info.entryPerMethod,
      status: info.entryPerStatus,
      usersCount: info.usersCount,
      distinctDomains: info.distinctDomains,
      averageTiming: info.averageTiming,
      distinctIsps: info.distinctIsps,
    },
  };
}

export default function admin(props) {
  const {
    method, status, usersCount, distinctDomains, averageTiming, distinctIsps,
  } = props;
  const adminStats = {
    method,
    status,
    usersCount,
    distinctDomains,
    averageTiming,
    distinctIsps,
  };
  const [diagram, setDiagram] = useState(props.diagram);
  const [histogram, setHistogram] = useState(props.histogram);
  const [filter, setFilter] = useState({
    contentType: null,
    weekDay: null,
    httpMethod: null,
    provider: null,
  });
  const diagramStats = {
    diagram,
    filter,
    setFilter,
    distinctIsps,
    averageTiming,
    method,
  };
  const [histogramFilter, setHistogramFilter] = useState([]);
  const histogramStats = {
    histogram,
    averageTiming,
    histogramFilter,
    setHistogramFilter,
  };

  useEffect(async () => {
    console.log('client', histogramFilter);
    await axios
      .post('http://localhost:3000/api/getHistogram', { histogramFilter })
      .then((response) => {
        if (response.status === 200) {
          // console.log(response.data);
          setHistogram(response.data);
          return response.data;
        }
      });
  }, [histogramFilter]);

  useEffect(async () => {
    await axios
      .post('../api/getAdminStatisticsDiagram', {
        filter,
      })
      .then((response) => {
        if (response.status === 200) {
          // console.log(response.data);
          setDiagram(response.data);
          return response.data;
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [filter]);
  return (
    <div>
      <Space direction="vertical">
        <Row>
          <Col span={11}>
            <Histogram data={histogramStats} />
          </Col>
          <Col span={2} />
          <Col span={11}>
            <Diagram data={diagramStats} />
          </Col>
        </Row>
        <AdminStatistics data={adminStats} />
      </Space>
    </div>
  );
}
