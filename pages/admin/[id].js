/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import {
  Row, Col, Space, Button, Divider, Typography,
} from 'antd';
import axios from 'axios';
import Histogram from '../../components/Histogram';
import AdminStatistics from '../../components/AdminStatistics';
import Diagram from '../../components/Diagram';
import MinMax from '../../components/MinMax';
import Cacheability from '../../components/Cacheablity';

const { Paragraph, Text, Title } = Typography;
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
    .post('http://localhost:3000/api/getHistogram', { histogramFilter: {} })
    .then((response) => {
      if (response.status === 200) {
        // console.log(response.data);
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
  const cache = await axios
    .post('http://localhost:3000/api/getCacheability', { cacheabilityFilter: [] })
    .then((response) => {
      if (response.status === 200) {
        // console.log(response.data);
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
  const minMaxData = await axios
    .post('http://localhost:3000/api/getMinMax', { minMaxFilter: [] })
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
      cache,
      diagram,
      minMaxData,
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
    method,
    status,
    usersCount,
    distinctDomains,
    averageTiming,
    distinctIsps,
    minMaxData,
    cache,
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
  const [histogramFilter, setHistogramFilter] = useState({ contentType: [], isp: [] });
  const histogramStats = {
    histogram,
    averageTiming,
    histogramFilter,
    distinctIsps,
    setHistogramFilter,
  };

  const [minMaxFilter, setMinMaxFilter] = useState({ contentType: [], isp: [] });
  const [minMax, setMinMax] = useState(minMaxData);
  const minMaxStats = {
    minMaxFilter,
    setMinMaxFilter,
    minMax,
    averageTiming,
    distinctIsps,
  };

  const [cacheability, setCacheability] = useState({ contentType: [], isp: [] });
  const [cacheabilityFilter, setCacheabilityFilter] = useState([]);
  const cacheabilityStats = {
    cacheabilityFilter,
    setCacheabilityFilter,
    cacheability,
    averageTiming,
    distinctIsps,
  };

  useEffect(async () => {
    await axios
      .post('http://localhost:3000/api/getCacheability', { cacheabilityFilter })
      .then((response) => {
        if (response.status === 200) {
          // console.log(response.data);
          setCacheability(response.data);
          return response.data;
        }
      });
  }, [cacheabilityFilter]);

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

  useEffect(async () => {
    await axios.post('http://localhost:3000/api/getMinMax', { minMaxFilter }).then((response) => {
      if (response.status === 200) {
        // console.log(response.data);
        setMinMax(response.data);
        return response.data;
      }
    });
  }, [minMaxFilter]);
  return (
    <div>
      <Space direction="vertical">
        <Row>
          <Col span={24}>
            <AdminStatistics data={adminStats} />
          </Col>
          <Divider style={{ height: '100%', borderWidth: 2, borderColor: '#363636' }} />
          <Col span={12}>
            <Histogram data={histogramStats} />
          </Col>
          <Col span={1}>
            {/* <Divider
              type="vertical"
              style={{ height: '100%', borderWidth: 2, borderColor: '#363636' }}
            /> */}
          </Col>
          <Col span={11}>
            <div
              style={{
                background: '#fff',
                height: '100%',
                // display: 'flex',
                // 'vertical-align': 'middle',
              }}
            >
              <Title level={3}>Histogram Information</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum
              </Paragraph>
            </div>
          </Col>
          <Divider style={{ height: '100%', borderWidth: 2, borderColor: '#363636' }} />
          <Col span={11}>
            <Diagram data={diagramStats} />
          </Col>
          <Col span={1} />
          <Col span={12}>
            <div
              style={{
                background: '#fff',
                height: '100%',
                // display: 'flex',
                // 'vertical-align': 'middle',
              }}
            >
              <Title level={3}>Diagram Information</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum
              </Paragraph>
            </div>
          </Col>
        </Row>
        <Divider style={{ height: '100%', borderWidth: 2, borderColor: '#363636' }} />

        <Row>
          <MinMax data={minMaxStats} />
          <Cacheability data={cacheabilityStats} />
          <Button type="primary" block>
            <a href="/map">Map</a>
          </Button>
        </Row>
      </Space>
    </div>
  );
}
