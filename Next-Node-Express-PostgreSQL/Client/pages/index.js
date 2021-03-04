import { Layout, Menu, Breadcrumb } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;



export default function landingPage () {

  return (
    <Layout className="layout">
    <Header>
    <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Login</Menu.Item>
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
      <Form
      name="basic"
      initialValues={{ remember: true }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          register
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