/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import {
  Card, Table, Row, Col,
} from 'antd';

export default function AdminStatistics({ data }) {
  const {
    method, status, usersCount, distinctDomains, averageTiming, distinctIsps,
  } = data;

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
  const columnsStats = [
    {
      title: 'Stats',
      dataIndex: 'stats',
      key: 'stats',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
    },
  ];
  const stats = [
    {
      stats: 'User',
      count: usersCount,
    },
    {
      stats: 'Unique Domains',
      count: distinctDomains,
    },
    {
      stats: 'Unique Isps',
      count: distinctIsps?.count,
    },
  ];
  return (
    <Card title="Statistics" extra={<a href="/user">Report a problem</a>} style={{ width: 1321 }}>
      <Row>
        <Col span={5}>
          <Table
            columns={columnsMethod}
            dataSource={method}
            pagination={{
              defaultPageSize: 3,
            }}
          />
        </Col>
        <Col span={1} />
        <Col span={5}>
          <Table
            columns={columnsStatus}
            dataSource={status}
            pagination={{
              defaultPageSize: 3,
            }}
          />
        </Col>
        <Col span={1} />
        <Col span={6}>
          <Table
            columns={columnsTimingsPerContentType}
            dataSource={averageTiming}
            pagination={{
              defaultPageSize: 3,
            }}
          />
        </Col>
        <Col span={1} />
        <Col span={5}>
          <Table
            columns={columnsStats}
            dataSource={stats}
          />
        </Col>
      </Row>
    </Card>
  );
}
