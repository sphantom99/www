/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React from 'react';
import { Card, Table, Select } from 'antd';

const { Option } = Select;
export default function Cacheability({ data }) {
  const {
    cacheability, setCacheabilityFilter, averageTiming, distinctIsps, cacheabilityFilter,
  } = data;
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
    setCacheabilityFilter({ ...cacheabilityFilter, contentType: value });
  }
  function onChangeIsp(value) {
    console.log(`selected ${value}`);
    setCacheabilityFilter({ ...cacheabilityFilter, isp: value });
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }
  return (
    <Card title="Statistics" extra={<a href="/reportProblem">Report a problem</a>} style={{ width: 400 }}>
      <Table
        columns={columnsCacheability}
        dataSource={stats}
        pagination={{
          defaultPageSize: 2,
        }}
      />
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
        {distinctIsps.unique.map((item, i) => (
          <Option key={i++} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </Card>
  );
}
