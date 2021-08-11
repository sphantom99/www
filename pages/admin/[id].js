/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React from 'react';
import {
  Row, Col, Card, Statistic, Button, Select, Table,
} from 'antd';
import { Bar } from 'react-chartjs-2';
import { ReloadOutlined } from '@ant-design/icons';
import axios from 'axios';

import MapChart from '../../components/MapChart';

const { Option } = Select;

export async function getServerSideProps() {
  const info = await axios
    .get('http://localhost:3000/api/getAdminStatistics')
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error.response);
    });

  return {
    props: {
      method: info.entryPerMethod,
      status: info.entryPerStatus,
      usersCount: info.usersCount,
      distinctDomains: info.distinctDomains,
      averageTiming: info.averageTiming,
    },
  };
}

export default function admin(props) {
  const {
    method, status, usersCount, distinctDomains, averageTiming,
  } = props;
  const contentType = [
    { id: 1, descr: 'something1' },
    { id: 2, descr: 'something2' },
    { id: 3, descr: 'something3' },
    { id: 4, descr: 'something4' },
  ];

  const WeekDay = [
    { id: 1, descr: 'Monday' },
    { id: 2, descr: 'Tuesday' },
    { id: 3, descr: 'Wednesday' },
    { id: 4, descr: 'Thursday' },
    { id: 5, descr: 'Friday' },
    { id: 6, descr: 'Saturday' },
    { id: 7, descr: 'Sunday' },
  ];
  const Methods = [
    { id: 1, descr: 'GET' },
    { id: 2, descr: 'POST' },
    { id: 3, descr: 'PUT' },
    { id: 4, descr: 'HEAD' },
    { id: 5, descr: 'DELETE' },
  ];

  const Provider = [
    { id: 1, descr: 'Wind' },
    { id: 2, descr: 'Cosmote' },
    { id: 3, descr: 'Vodafone' },
  ];

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
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
            <Table
              columns={columnsTimingsPerContentType}
              dataSource={averageTiming}
              pagination={{
                defaultPageSize: 3,
              }}
            />
          </Row>

          <Statistic title="User Count" value={usersCount} />
          <Statistic title="Unique Domains Count" value={distinctDomains} />
          <Statistic title="Files uploaded" value={5} />
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
            width={400}
            height={200}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </Card>
        <Card title="Options" style={{ width: 500 }}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Content Type"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
          >
            {contentType.map((item) => (
              <Option value={item.id}>{item.descr}</Option>
            ))}
          </Select>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="WeekDay"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
          >
            {WeekDay.map((item) => (
              <Option value={item.id}>{item.descr}</Option>
            ))}
          </Select>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="HTTP Method"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
          >
            {Methods.map((item) => (
              <Option value={item.id}>{item.descr}</Option>
            ))}
          </Select>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Provider"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
          >
            {Provider.map((item) => (
              <Option value={item.id}>{item.descr}</Option>
            ))}
          </Select>
          <Button icon={<ReloadOutlined />} />
        </Card>
      </Col>
      <Col>
        <Card title="Map" extra={<a href="/user">Report a problem</a>} style={{ width: 500 }}>
          <MapChart />
        </Card>
      </Col>
    </Row>
  );
}
