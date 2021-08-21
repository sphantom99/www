/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React from 'react';
import { Card, Table, Select } from 'antd';

const { Option } = Select;
export default function Cacheability({ data }) {
  const { cacheability, setCacheabilityFilter, averageTiming } = data;
  const columnsCacheability = [
    {
      title: 'Cacheability',
      dataIndex: 'cacheability',
      key: 'cacheability',
    },
    {
      title: 'Percentage',
      dataIndex: 'percentage',
      key: 'percentage',
    },
  ];
  const stats = [
    {
      cacheability: 'Public',
      percentage: (cacheability.publicCache / cacheability.all).toFixed(4),
    },
    {
      cacheability: 'Private',
      percentage: (cacheability.privateCache / cacheability.all).toFixed(4),
    },
    {
      cacheability: 'No-Cache',
      percentage: (cacheability.noCache / cacheability.all).toFixed(4),
    },
    {
      cacheability: 'No-Store',
      percentage: (cacheability.noStore / cacheability.all).toFixed(4),
    },
  ];
  function onChangeType(value) {
    console.log(`selected ${value}`);
    setCacheabilityFilter(value);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }
  return (
    <Card title="Statistics" extra={<a href="/user">Report a problem</a>} style={{ width: 700 }}>
      <Table columns={columnsCacheability} dataSource={stats} />
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
        {averageTiming.map((item, i) => (
          <Option key={i++} value={item.contentType?.trim()}>
            {item.contentType}
          </Option>
        ))}
      </Select>
    </Card>
  );
}
