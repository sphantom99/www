/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React from 'react';
import { Card, Table, Select } from 'antd';

const { Option } = Select;
export default function MinMax({ data }) {
  const {
    minMax, setMinMaxFilter, averageTiming, distinctIsps,
  } = data;
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
      count: (minMax.max / minMax.all).toFixed(4),
    },
    {
      directive: 'Min-Fresh',
      count: (minMax.min / minMax.all).toFixed(4),
    },
  ];
  function onChangeType(value) {
    console.log(`selected ${value}`);
    setMinMaxFilter({ ...setMinMaxFilter, contentType: value });
  }
  function onChangeIsp(value) {
    console.log(`selected ${value}`);
    setMinMaxFilter({ ...setMinMaxFilter, isp: value });
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }
  return (
    <Card title="Statistics" extra={<a href="/reportProblem">Report a problem</a>} style={{ width: 400 }}>
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
