import React from 'react';
import {
  Form, Input, Button, Row, Col,
} from 'antd';
import { useRouter } from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';

export default function Login() {
  const router = useRouter();

  async function onFinish(values) {
    axios
      .post('./api/checkCredentials', { values })
      .then((response) => {
        console.log('this is the response from login', response);
        if (response.data !== undefined && response.data !== '') {
          console.log(response.data);
          if (response.data.is_admin) router.push(`/admin/${response.data.username}`);
          else router.push(`/user/${response.data.username}`);
          cookie.set(
            'secret',
            `${response.data.username},${response.data.is_admin}`,
            { expires: 1 },
          );
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
