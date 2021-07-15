import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;

export default function CustomLayout({ children }) {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item>
            <a href="/uploadFile">Home</a>
          </Menu.Item>
          <Menu.Item>
            <a href="/user">Profile</a>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <div className="site-layout-content">{children}</div>
        </Breadcrumb>
      </Content>
      <Footer style={{ textAlign: 'center' }}>WEB ©2021 Created by CEID students</Footer>
    </Layout>
  );
}
