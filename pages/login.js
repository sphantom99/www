/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Form, Input, Button, Row, Col, notification,
} from 'antd';
import { useRouter } from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';

export default function Login() {
  const router = useRouter();

  const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
  };
  const openNotification = (errorTitle, errorMessage) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => notification.close(key)}
        style={{ backgroundColor: errorTitle === 'Success' ? '#43c333' : '#ee3737' }}
      >
        Confirm
      </Button>
    );
    notification.open({
      message: errorTitle,
      description: errorMessage,
      btn,
      key,
      onClose: close,
    });
  };

  async function onFinish(values) {
    axios
      .post('./api/checkCredentials', { values })
      .then((response) => {
        console.log('this is the response from login', response);
        if (response.data !== undefined && response.data !== '') {
          console.log(response.data);
          if (response.data.is_admin) router.push(`/admin/${response.data.username}`);
          else router.push(`/user/${response.data.username}`);
          cookie.set('secret', `${response.data.username},${response.data.is_admin}`, {
            expires: 1,
          });
        } else {
          openNotification(
            'Wrong Credentials',
            'Your username or your password may be wrong. Please try again.',
          );
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    openNotification(
      'Wrong Credentials',
      'Your username or your password may be wrong. Please try again.',
    );
  };

  return (
    <>
      {/* <Row type="flex" justify="center" align="middle">
        <Col>
          <h2>Login here</h2>
        </Col>
      </Row> */}
      <Row type="flex" justify="center" align="middle">
        <Col>
          <div className="login-box">
            <h2>Login</h2>
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
                <div className="user-box">
                  <Input placeholder="Username" />
                </div>
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <div className="user-box">
                  <Input placeholder="Password" type="password" />
                </div>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
                <Button type="link " htmlType="submit" className="reset-this">
                  <a>
                    <span />
                    <span />
                    <span />
                    <span />
                    Login
                  </a>
                </Button>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                <a href="/register">
                  <span />
                  <span />
                  <span />
                  <span />
                  Register
                </a>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}
