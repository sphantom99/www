import React from 'react';
import {
  Form, Input, Button, Row, Col,
} from 'antd';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Login() {
  const router = useRouter();

  async function onFinish(values) {
    axios
      .post('./api/checkCredentials', { values })
      .then((response) => {
        console.log(response);
        if (response !== undefined) {
          console.log('passed');
          router.push('/user');
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Row type="flex" justify="center" align="middle">
        <Col>
          <h2>Login here</h2>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col>
          <Form
            name="basic"
            wrapperCol={{ span: 35 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
