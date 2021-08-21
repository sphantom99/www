/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React from 'react';
import { Card, Table, Select } from 'antd';

const { Option } = Select;
export default function MinMax({ data }) {
  const { minMax, setMinMaxFilter, averageTiming } = data;
  const columnsDirective = [
    {
      title: 'Directive',
      dataIndex: 'directive',
      key: 'directive',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
    },
  ];
  const stats = [
    {
      directive: 'Max-Stale',
      count: minMax.max / minMax.all.toFixed(4),
    },
    {
      directive: 'Min-Fresh',
      count: minMax.min / minMax.all.toFixed(4),
    },
  ];
  function onChangeType(value) {
    console.log(`selected ${value}`);
    setMinMaxFilter(value);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }
  return (
    <Card title="Statistics" extra={<a href="/user">Report a problem</a>} style={{ width: 400 }}>
      <Table columns={columnsDirective} dataSource={stats} />
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
