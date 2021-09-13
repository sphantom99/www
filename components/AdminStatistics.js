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
    <Card title="Basic Admin Statistics" extra={<a href="/reportProblem">Report a problem</a>}>
      <Row>
        <Col xs={11} lg={5}>
          <Table
            columns={columnsMethod}
            dataSource={method}
            pagination={{
              defaultPageSize: 3,
            }}
          />
        </Col>
        <Col xs={2} lg={1} />
        <Col xs={11} lg={5}>
          <Table
            columns={columnsStatus}
            dataSource={status}
            pagination={{
              defaultPageSize: 3,
            }}
          />
        </Col>
        <Col xs={0} lg={1} />
        <Col xs={11} lg={5}>
          <Table
            columns={columnsTimingsPerContentType}
            dataSource={averageTiming}
            pagination={{
              defaultPageSize: 3,
            }}
          />
        </Col>
        <Col xs={2} lg={1} />
        <Col xs={11} lg={5}>
          <Table columns={columnsStats} dataSource={stats} />
        </Col>
      </Row>
    </Card>
  );
}
