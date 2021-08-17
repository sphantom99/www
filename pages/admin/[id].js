/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import {
  Row, Col, Card, Statistic, Select, Table,
} from 'antd';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

import MapChart from '../../components/MapChart';

const { Option } = Select;

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

  // console.log('averageTiming:', averageTiming);
  const [diagram, setDiagram] = useState(props.diagram);
  const [histogram, setHistogram] = useState(props.histogram);
  // console.log(histogram);
  const WeekDay = [
    { id: 1, descr: 'Monday' },
    { id: 2, descr: 'Tuesday' },
    { id: 3, descr: 'Wednesday' },
    { id: 4, descr: 'Thursday' },
    { id: 5, descr: 'Friday' },
    { id: 6, descr: 'Saturday' },
    { id: 0, descr: 'Sunday' },
    { id: null, descr: 'No option' },
  ];

  // console.log(diagram);
  const labelData = [];
  const diagramData = [];
  diagram.map((item) => {
    labelData.push(`${item.id}:00`);
    diagramData.push(item.averageTime);
  });
  // console.log(labelData);
  // console.log(diagramData);
  const bucketSize = (histogram[0].response.headers.maxAge
      - histogram[histogram.length - 1].response.headers.maxAge)
    / 10;
  // console.log(bucketSize);
  const bucketRange = [{ low: 0, high: 0, count: 0 }];
  const bucketLabel = [];
  for (let i = 0; i < 10; i++) {
    const temp = parseInt(bucketRange[i].high);
    const curr = parseInt(temp + bucketSize);
    bucketRange.push({ low: temp, high: curr, count: 0 });
    bucketLabel.push(`${temp}-${curr}`);
  }

  bucketRange.shift();
  // console.log(bucketRange);
  // console.log(bucketLabel);
  const bucketData = [];
  histogram.map((item) => {
    const maxAge = parseInt(item.response.headers.maxAge);
    bucketRange.map((buck) => {
      if (maxAge >= buck.low && maxAge < buck.high) {
        buck.count += 1;
      }
    });
  });
  // console.log(bucketRange);
  bucketRange.map((item) => {
    bucketData.push(item.count);
  });
  const data = {
    labels: labelData,
    datasets: [
      {
        label: 'AverageTime',
        data: diagramData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
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

  const [filter, setFilter] = useState({
    contentType: null,
    weekDay: null,
    httpMethod: null,
    provider: null,
  });
  function onChangeType(value) {
    console.log(`selected ${value}`);
    setFilter({ ...filter, contentType: value });
  }
  function onChangeDay(value) {
    console.log(`selected ${value}`);
    setFilter({ ...filter, weekDay: value });
  }
  function onChangeMethod(value) {
    console.log(`selected ${value}`);
    setFilter({ ...filter, httpMethod: value });
  }
  function onChangeIsp(value) {
    console.log(`selected ${value}`);
    setFilter({ ...filter, provider: value });
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  const columnsMethod = [
    {
      title: 'Method',
      dataIndex: 'method',
      key: 'method',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
    },
  ];
  const columnsStatus = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
    },
  ];
  const columnsTimingsPerContentType = [
    {
      title: 'Content Type',
      dataIndex: 'contentType',
      key: 'contentType',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Average Time',
      dataIndex: 'averageTime',
      key: 'averageTime',
    },
  ];

  // async function updateDiagram() {
  //   await axios
  //     .post('../api/getAdminStatisticsDiagram', {
  //       filter,
  //     })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         // console.log(response.data);
  //         setDiagram(response.data);
  //         return response.data;
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // }

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
    <Row>
      <Col xs={11}>
        <Card
          title="Statistics"
          extra={<a href="/user">Report a problem</a>}
          style={{ width: 700 }}
        >
          <Row>
            <Col xs={11}>
              <Table
                columns={columnsMethod}
                dataSource={method}
                pagination={{
                  defaultPageSize: 3,
                }}
              />
            </Col>
            <Col xs={2} />
            <Col xs={11}>
              <Table
                columns={columnsStatus}
                dataSource={status}
                pagination={{
                  defaultPageSize: 3,
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={11}>
              <Table
                columns={columnsTimingsPerContentType}
                dataSource={averageTiming}
                pagination={{
                  defaultPageSize: 3,
                }}
              />
            </Col>
            <Col xs={2} />
            <Col xs={11}>
              <Card title="Counts">
                <Statistic title="User Count" value={usersCount} />
                <Statistic title="Unique Domains Count" value={distinctDomains} />
                <Statistic title="Unique Isps Count" value={distinctIsps.count} />
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col xs={2} />
      <Col xs={11}>
        <Card
          title="Statistics"
          extra={<a href="/user">Report a problem</a>}
          style={{ width: 500 }}
        >
          <Bar
            data={data}
            width={500}
            height={200}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </Card>
        <Card title="Options" style={{ width: 500 }}>
          <Select
            style={{ width: 200 }}
            allowClear
            mode="multiple"
            placeholder="Content Type"
            optionFilterProp="children"
            onChange={onChangeType}
            onFocus={onFocus}
            onBlur={onBlur}
          >
            {averageTiming.map((item) => (
              <Option value={item.contentType?.trim()}>{item.contentType}</Option>
            ))}
          </Select>
          <Select
            style={{ width: 200 }}
            allowClear
            mode="multiple"
            placeholder="WeekDay"
            optionFilterProp="children"
            onChange={onChangeDay}
            onFocus={onFocus}
            onBlur={onBlur}
          >
            {WeekDay.map((item) => (
              <Option value={item.id}>{item.descr}</Option>
            ))}
          </Select>
          <Select
            style={{ width: 200 }}
            allowClear
            mode="multiple"
            placeholder="HTTP Method"
            optionFilterProp="children"
            onChange={onChangeMethod}
            onFocus={onFocus}
            onBlur={onBlur}
          >
            {method.map((item) => (
              <Option value={item.method}>{item.method}</Option>
            ))}
          </Select>
          <Select
            style={{ width: 200 }}
            allowClear
            mode="multiple"
            placeholder="Provider"
            optionFilterProp="children"
            onChange={onChangeIsp}
            onFocus={onFocus}
            onBlur={onBlur}
          >
            {distinctIsps.unique.map((item) => (
              <Option value={item}>{item}</Option>
            ))}
          </Select>
          {/* <Button icon={<ReloadOutlined />} onClick={updateDiagram} /> */}
        </Card>
        <Card
          title="Statistics"
          extra={<a href="/user">Report a problem</a>}
          style={{ width: 500 }}
        >
          <Bar
            data={dataHistogram}
            width={500}
            height={400}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </Card>
      </Col>
      <Col>
        {/* <Card title="Map" extra={<a href="/user">Report a problem</a>} style={{ width: 500 }}>
          <MapChart />
        </Card> */}
      </Col>
    </Row>
  );
}
