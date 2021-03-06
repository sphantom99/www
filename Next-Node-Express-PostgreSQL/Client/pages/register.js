import { Layout, Menu, Breadcrumb } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Footer } = Layout;
import Link from 'next/link';

export default function landingPage () {
  return (
    <Layout className="layout">
    <Header>
    <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
        <Link href="/login">
            	<a>Login</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">Register</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
    <Row>
      <Col span={8}></Col>
      <Col span={8}><br/></Col>
      <Col span={8}></Col>
    </Row>
    <Row>
      <Col span={8}></Col>
      <Col span={8}>
      <Form>
      <Form.Item
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
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
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
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      >
        <Checkbox>
          I have read the 
          <Link href="/agreement">
            	<a>agreement</a>
          </Link>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>



      </Col>
      <Col span={8}></Col>
    </Row>

    <Row>
      <Col span={8}></Col>
      <Col span={8}></Col>
      <Col span={8}></Col>
    </Row>

      
    </Content>
    <Footer style={{ textAlign: 'center' }}> Harhub ©2021 Created by..</Footer>
  </Layout>

  )

}