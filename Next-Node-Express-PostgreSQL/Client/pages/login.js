/*
need to change layout buttons!! bug


*/

import { Form, Input, Button, Checkbox, Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useRouter} from 'next/router';
const { Header, Content, Footer } = Layout;
export default function login() {

  const router = useRouter();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Layout className="layout">
    <Header>
    <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Login</Menu.Item>
        <Menu.Item key="2" onClick={()=>router.push('/')}>Register</Menu.Item> 
      </Menu>
    </Header>
    <Content>
    <Form
      style={{paddingLeft: "40%", paddingTop:"10%"}}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1>Welcome to <span style={{color: "#00a3cc"}}>HARHUB</span></h1>
      <br/>
      <br/>
      <br/>
      <Form.Item
        style={{width:"250pt"}}
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        style={{width:"250pt"}}
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item >
        <span style={{marginLeft:"100px"}}>
        <a className="login-form-forgot" href="">
          Forgot password
        </a></span>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
       <br/> Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </Content>
    <Footer style={{ textAlign: 'center' }}> Harhub ©2021 Created by..</Footer>
  </Layout>
  );
};
