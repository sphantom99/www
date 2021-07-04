import { Layout, Menu, Breadcrumb, Button } from 'antd';
import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

const { Header, Content, Footer } = Layout;

export default function CustomLayout({ children }) {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item>Profile</Menu.Item>
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
