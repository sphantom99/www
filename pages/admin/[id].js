/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

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
    .post('http://localhost:3000/api/getHistogram', {})
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
  const [histogram] = useState(props.histogram);
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

  const labelData = [];
  const diagramData = [];
  diagram.map((item) => {
    labelData.push(`${item.id}:00`);
    diagramData.push(item.averageTime);
  });
  const bucketSize = (histogram[0].response.headers.maxAge
      - histogram[histogram.length - 1].response.headers.maxAge)
    / 10;
  const bucketRange = [{ low: 0, high: 0, count: 0 }];
  const bucketLabel = [];
  for (let i = 0; i < 10; i++) {
    const temp = parseInt(bucketRange[i].high);
    const curr = parseInt(temp + bucketSize);
    bucketRange.push({ low: temp, high: curr, count: 0 });
    bucketLabel.push(`${temp}-${curr}`);
  }
  bucketRange.shift();
  const bucketData = [];
  histogram.map((item) => {
    const maxAge = parseInt(item.response.headers.maxAge);
    bucketRange.map((buck) => {
      if (maxAge >= buck.low && maxAge < buck.high) {
        buck.count += 1;
      }
    });
  });
  bucketRange.map((item) => {
    bucketData.push(item.count);
  });

  const dataHistogram = {
    labels: bucketLabel,
    datasets: [
      {
        label: 'distribution of Max Age',
        data: bucketData,
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

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
      <Row>
        <Col span={11}>
          <Card
            title="Statistics"
            extra={<a href="/user">Report a problem</a>}
            style={{ width: 700 }}
          >
            <Bar
              data={dataHistogram}
              width={600}
              height={371}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </Card>
        </Col>
        <Col span={2} />
        <Col span={11}>
          <Diagram data={diagramStats} />
        </Col>
      </Row>
      <AdminStatistics data={adminStats} />
    </div>
  );
}
