/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Card, Row, Col, Form, Input, Button, Statistic,
} from 'antd';
import Link from 'next/link';

export default function User() {
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
                <Input defaultValue="Paulinho" />
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
                <Statistic title="Last upload" value="15-7-2021" />
              </Col>
              <Col xs={4} />
              <Col xs={10}>
                <Statistic title="Files uploaded" value={5} />
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
