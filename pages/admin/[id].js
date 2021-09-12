/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import {
  Row, Col, Space, Divider, Typography,
} from 'antd';
import axios from 'axios';
import Image from 'next/image';
import Histogram from '../../components/Histogram';
import AdminStatistics from '../../components/AdminStatistics';
import Diagram from '../../components/Diagram';
import MinMax from '../../components/MinMax';
import Cacheability from '../../components/Cacheablity';

const {
  Paragraph, Text, Title, Link,
} = Typography;

const content = {
  marginTop: '100px',
  width: '80%',
  margin: '0 auto',
  padding: '20px',
};

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

  const [cacheability, setCacheability] = useState(cache);
  const [cacheabilityFilter, setCacheabilityFilter] = useState({ contentType: [], isp: [] });
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
                Here you can see the distribution histogram of the TTL in the response.
                <br />
                The filters which can be applied are: Content-Type and Isp
                <br />
                <br />
                <br />
                <Text strong>Time to live (TTL)</Text>
                {' '}
                or
                <Text strong> hop limit </Text>
                {' '}
                is a mechanism which limits the lifespan or lifetime
                of data in a computer or network. TTL may be implemented as a counter or timestamp
                attached to or embedded in the data. Once the prescribed event count or timespan has
                elapsed, data is discarded or revalidated. In computer networking, TTL prevents a
                data packet from circulating indefinitely. In computing applications, TTL is
                commonly used to improve the performance and manage the caching of data
                <br />
                <br />
                If you want to learn more
                {' '}
                <Link href="https://en.wikipedia.org/wiki/Time_to_live" target="_blank">
                  Click Here..
                </Link>
                <br />
                <br />
                <Image
                  src="/TTL.png"
                  className="logo"
                  height="265"
                  width="450"
                  alt="Picture of the author"
                />
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
                Here you can see a diagram with the Y-axis representing the average response time
                and the X-axis representing the hours of the day.
                <br />
                The filters which can be applied are: Content-Type and Isp, WeekDay and HTTP Method.
                <br />
                <br />
                <Text strong>Response time</Text>
                {' '}
                Response time is the total amount of time it takes
                to respond to a request for service. That service can be anything from a memory
                fetch, to a disk IO, to a complex database query, or loading a full web page.
                <br />
                <br />
                If you want to learn more
                {' '}
                <Link
                  href="https://en.wikipedia.org/wiki/Response_time_(technology)"
                  target="_blank"
                >
                  Click Here..
                </Link>
                <br />
                <br />
                <Image
                  src="/timings.webp"
                  className="logo"
                  height="195"
                  width="450"
                  alt="Picture of the author"
                />
              </Paragraph>
            </div>
          </Col>
        </Row>
        <Divider style={{ height: '100%', borderWidth: 2, borderColor: '#363636' }} />

        <Row>
          <Col span={8}>
            <MinMax data={minMaxStats} />
          </Col>
          <Col span={8}>
            <Cacheability data={cacheabilityStats} />
          </Col>
          <Col span={8}>
            <div style={content}>
              <Link href="/map">
                Press here to visualize your data.
                <a href="/map">
                  <Image
                    src="/mapLines.png"
                    className="logo"
                    height="299"
                    width="455"
                    alt="Picture of the author"
                  />
                </a>
              </Link>
            </div>
          </Col>
          {/* <Button type="primary" block>
            <a href="/map">Map</a>
          </Button> */}
        </Row>
      </Space>
    </div>
  );
}
