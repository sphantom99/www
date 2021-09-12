/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
import { Select, Card } from 'antd';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const { Option } = Select;
export default function Diagram({ data }) {
  const { diagram } = data;
  const { filter, setFilter } = data;
  const diagramData = [];
  const labelData = [];
  diagram.map((item) => {
    labelData.push(`${item.id}:00`);
    diagramData.push(item.averageTime);
  });
  const FormattedData = {
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
  const WeekDay = [
    { id: 1, descr: 'Monday' },
    { id: 2, descr: 'Tuesday' },
    { id: 3, descr: 'Wednesday' },
    { id: 4, descr: 'Thursday' },
    { id: 5, descr: 'Friday' },
    { id: 6, descr: 'Saturday' },
    { id: 0, descr: 'Sunday' },
  ];
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
  return (
    <div>
      <Card title="Diagram" extra={<a href="/reportProblem">Report a problem</a>}>
        <Bar
          data={FormattedData}
          width={500}
          height={200}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </Card>
      <Card title="Options">
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
          {data.averageTiming.map((item, i) => (
            <Option key={i++} value={item.contentType?.trim()}>
              {item.contentType}
            </Option>
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
          {WeekDay.map((item, i) => (
            <Option key={i++} value={item.id}>
              {item.descr}
            </Option>
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
          {data.method.map((item, i) => (
            <Option key={i++} value={item.method}>
              {item.method}
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
          {data.distinctIsps.unique.map((item, i) => (
            <Option key={i++} value={item}>
              {item}
            </Option>
          ))}
        </Select>
        {/* <Button icon={<ReloadOutlined />} onClick={updateDiagram} /> */}
      </Card>
    </div>
  );
}
