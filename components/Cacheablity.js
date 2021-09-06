/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React from 'react';
import {
  // Card,
  // Table,
  Select,
} from 'antd';
import { PolarArea } from 'react-chartjs-2';

const { Option } = Select;
export default function Cacheability({ data }) {
  const {
    cacheability, setCacheabilityFilter, averageTiming, distinctIsps, cacheabilityFilter,
  } = data;
  // const columnsCacheability = [
  //   {
  //     title: 'Cacheability',
  //     dataIndex: 'cacheability',
  //     key: 'cacheability',
  //   },
  //   {
  //     title: 'Percentage',
  //     dataIndex: 'percentage',
  //     key: 'percentage',
  //   },
  // ];
  const labels = ['Public', 'Private', 'No-Cache', 'No-Store'];
  const stats = [
    (cacheability.publicCache / cacheability.all).toFixed(4),
    (cacheability.privateCache / cacheability.all).toFixed(4),
    (cacheability.noCache / cacheability.all).toFixed(4),
    (cacheability.noStore / cacheability.all).toFixed(4),
  ];
  // const stats = [
  //   {
  //     cacheability: 'Public',
  //     percentage: (cacheability.publicCache / cacheability.all).toFixed(4),
  //   },
  //   {
  //     cacheability: 'Private',
  //     percentage: (cacheability.privateCache / cacheability.all).toFixed(4),
  //   },
  //   {
  //     cacheability: 'No-Cache',
  //     percentage: (cacheability.noCache / cacheability.all).toFixed(4),
  //   },
  //   {
  //     cacheability: 'No-Store',
  //     percentage: (cacheability.noStore / cacheability.all).toFixed(4),
  //   },
  // ];
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
  const dataStat = {
    labels,
    datasets: [
      {
        label: '# of Votes',
        data: stats,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ borderRadius: '25px', background: '#fff' }}>
      <PolarArea data={dataStat} />
      <Select
        style={{ width: 200, marginLeft: '20px' }}
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
    </div>
    // <Card
    //   title="Statistics"
    //   extra={<a href="/reportProblem">Report a problem</a>}
    //   style={{ width: 400 }}
    // >
    //   <Table
    //     columns={columnsCacheability}
    //     dataSource={stats}
    //     pagination={{
    //       defaultPageSize: 2,
    //     }}
    //   />

  // </Card>
  );
}
