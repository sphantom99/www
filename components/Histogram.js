/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
import React from 'react';
import { Card, Select, Divider } from 'antd';
import { Bar } from 'react-chartjs-2';

const { Option } = Select;
export default function Histogram({ data }) {
  const {
    histogram, averageTiming, setHistogramFilter, histogramFilter, distinctIsps,
  } = data;
  let bucketSize = 0;
  let bucketRange = [];
  let bucketLabel = [];
  let bucketData = [];
  if (histogram.length !== 0) {
    bucketSize = (histogram[0].response.headers.maxAge
        - histogram[histogram.length - 1].response.headers.maxAge)
      / 10;
    bucketRange = [{ low: 0, high: 0, count: 0 }];
    bucketLabel = [];
    for (let i = 0; i < 10; i++) {
      const temp = parseInt(bucketRange[i].high);
      const curr = parseInt(temp + bucketSize);
      bucketRange.push({ low: temp, high: curr, count: 0 });
      bucketLabel.push(`${temp}-${curr}`);
    }
    bucketRange.shift();
    bucketData = [];
    histogram.map((item) => {
      const maxAge = parseInt(item.response.headers.maxAge);
      bucketRange.map((buck) => {
        if (maxAge >= buck.low && maxAge < buck.high) {
          buck.count += 1;
        }
      });
    });
    bucketRange.map((item) => {
      bucketData.push(item.count);
    });
  }

  const dataHistogram = {
    labels: bucketLabel,
    datasets: [
      {
        label: 'distribution of Max Age',
        data: bucketData,
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };
  function onChangeType(value) {
    setHistogramFilter({ ...histogramFilter, contentType: value });
  }
  function onChangeIsp(value) {
    setHistogramFilter({ ...histogramFilter, isp: value });
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }
  return (
    <div>
      <Card title="Histogram" extra={<a href="/reportProblem">Report a problem</a>}>
        <Bar
          data={dataHistogram}
          width={600}
          height={371}
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
    </div>
  );
}
