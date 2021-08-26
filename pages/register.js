/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Form, Input, Row, Col, Button,
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
  const onFinish = (values) => {
    console.log('Success:', values);
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
      <Row type="flex" justify="center" align="middle">
        <Col>
          <h2>Register here</h2>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col>
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
              label="Username"
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
              <Input />
            </Form.Item>
            <Form.Item
              labelCol={{ span: 24 }}
              name="firstName"
              label="First Name"
              tooltip="What do you want others to call you?"
              rules={[
                { required: true, message: 'Please input your first name!', whitespace: true },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              labelCol={{ span: 24 }}
              name="lastName"
              label="Last Name"
              tooltip="What do you want others to call you?"
              rules={[
                { required: true, message: 'Please input your last name!', whitespace: true },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              labelCol={{ span: 24 }}
              name="email"
              label="E-mail"
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
              <Input />
            </Form.Item>

            <Form.Item
              labelCol={{ span: 24 }}
              name="password"
              label="Password"
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
                    return Promise.reject(new Error('Password must contain atleast 8 characters, \n one capital letter, \n one number \n and atleast one of [#$*&@]'));
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
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
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
