import React from 'react';
import {
  Row, Col, Card, Statistic, Button, Select,
} from 'antd';
import { Bar } from 'react-chartjs-2';
import { ReloadOutlined } from '@ant-design/icons';
import MapChart from '../components/MapChart';

const { Option } = Select;
export default function admin() {
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

  return (
    <Row>
      <Col xs={11}>
        <Card
          title="Statistics"
          extra={<a href="/user">Report a problem</a>}
          style={{ width: 500 }}
        >
          <Statistic title="Files uploaded" value={5} />
          <Statistic title="Files uploaded" value={5} />
          <Statistic title="Files uploaded" value={5} />
          <Statistic title="Files uploaded" value={5} />
          <Statistic title="Files uploaded" value={5} />
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
      </Col>
      <Col>
        <Card
          title="Map"
          extra={<a href="/user">Report a problem</a>}
        >
          <MapChart />
        </Card>
      </Col>
    </Row>
  );
}
