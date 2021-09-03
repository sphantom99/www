/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Form, Row, Col, Button, notification,
} from 'antd';
import axios from 'axios';

export async function getServerSideProps() {
  const reservedUsernames = await axios
    .get('http://localhost:3000/api/getAllUsers')
    .then((response) => {
      if (response.status === 200) {
        // console.log(response.data);
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
  return {
    props: { reservedUsernames },
  };
}

export default function register(props) {
  const { reservedUsernames } = props;
  console.log(reservedUsernames);
  const canNotUseTheseUsername = reservedUsernames.map((item) => item.username);
  console.log(canNotUseTheseUsername);
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    openNotification();
    axios
      .post('./api/insertUser', { creds: values })
      .then((response) => {
        console.log('this is the response from login', response);
        if (response.data !== undefined && response.data !== '') {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return (
    <>
      {/* <Row type="flex" justify="center" align="middle">
        <Col>
          <h2>Register here</h2>
        </Col>
      </Row> */}
      <Row type="flex" justify="center" align="middle">
        <Col>
          <div className="login-box">
            <h2>Register</h2>
            <Form
              {...formItemLayout}
              name="register"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              scrollToFirstError
              wrapperCol={{ span: 24 }}
            >
              <Form.Item
                showSearch={false}
                labelCol={{ span: 24 }}
                name="username"
                tooltip="What do you want others to call you?"
                rules={[
                  { required: true, message: 'Please input your nickname!', whitespace: true },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!canNotUseTheseUsername.includes(value)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Username exists'));
                    },
                  }),
                ]}
              >
                <div className="user-box">
                  <input className="reset-this" placeholder="Username" />
                </div>
              </Form.Item>
              {/* <Form.Item
                labelCol={{ span: 24 }}
                name="firstName"
                tooltip="What do you want others to call you?"
                rules={[
                  { required: true, message: 'Please input your first name!', whitespace: true },
                ]}
              >
                <div className="user-box">
                  <Input placeholder="First Name" />
                </div>
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                name="lastName"
                tooltip="What do you want others to call you?"
                rules={[
                  { required: true, message: 'Please input your last name!', whitespace: true },
                ]}
              >
                <div className="user-box">
                  <Input placeholder="Last Name" />
                </div>
              </Form.Item> */}
              <Form.Item
                labelCol={{ span: 24 }}
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <div className="user-box">
                  <input placeholder="E-mail" />
                </div>
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (
                        value.match(
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/g,
                        )
                      ) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'Password must contain atleast 8 characters, \n one capital letter, \n one number \n and atleast one of [#$*&@]',
                        ),
                      );
                    },
                  }),
                ]}
                hasFeedback
              >
                <div className="user-box">
                  <input placeholder="Password" type="password" />
                </div>
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={['password']}
                labelCol={{ span: 24 }}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Passwords dont match!'));
                    },
                  }),
                ]}
              >
                <div className="user-box">
                  <input placeholder=" Confirm Password" type="password" />
                </div>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}
