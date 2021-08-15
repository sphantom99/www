import {
  Layout, Menu, Breadcrumb, Button,
} from 'antd';

import React from 'react';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

export default function CustomLayout({ children }) {
  const router = useRouter();
  const cook = cookie.get('secret');
  async function logout() {
    console.log('loggin gout ');
    cookie.remove('secret');
    router.push('/login');
  }
  return (
    <Layout className="layout">
      <Header>
        {cook && (
          <>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item>
                <Link href="/uploadFile">
                  <a href="/uploadFile">Home</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/user">
                  <a href="/user">Profile</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Button onClick={logout}>Logout</Button>
              </Menu.Item>
              <Menu.Item disabled>{cook}</Menu.Item>
            </Menu>
          </>
        )}
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
