/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import {
  Card, Row, Col, Form, Input, Button, Statistic,
} from 'antd';
import Link from 'next/link';
import cookie from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function User() {
  const [count, setCount] = useState();
  const [lastUpload, setLastUpload] = useState();
  const username = cookie.get('secret');
  const router = useRouter();
  useEffect(() => {
    if (username === undefined) {
      router.push('/login');
    }
    axios
      .post('./api/getUserStatistics', { username })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          console.log(response.data.count);
          setCount(response.data.count);
          setLastUpload(response.data.date[0].last_upload_data);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  return (
    <div>
      <Row>
        <Col xs={10}>
          <Card
            title="Change Username/Password"
            extra={<a href="/user">Report a problem</a>}
            style={{ width: 500 }}
          >
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input defaultValue={username} />
              </Form.Item>

              <Form.Item
                label=" Old Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label=" New Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Change
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={2} />
        <Col xs={10}>
          <Card
            title="Statistics"
            extra={<a href="/user">Report a problem</a>}
            style={{ width: 500 }}
          >
            <Row>
              <Col xs={10}>
                <Statistic title="Last upload" value={lastUpload} />
              </Col>
              <Col xs={4} />
              <Col xs={10}>
                <Statistic title="Files uploaded" value={count} />
              </Col>
            </Row>
          </Card>
          <Card title="Heatmap" extra={<a href="/user">Report a problem</a>} style={{ width: 500 }}>
            <Link href="/heatmap">Crowd Distribution</Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
