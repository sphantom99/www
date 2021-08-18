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
  const cookieTemp = cook?.split(',');
  console.log(cookieTemp);
  // const username = cookieTemp[0] ? cookieTemp[0] : '';
  // const isAdmin = cookieTemp[1] ? cookieTemp[1] : '';

  return (
    <Layout className="layout">
      <Header style={{ backgroundColor: '#315f72' }}>
        {cook && (
          <>
            <Menu style={{ backgroundColor: '#315f72' }} theme="dark" mode="horizontal">
              <Menu.Item>
                <Link href="/uploadFile">
                  <a href="/uploadFile">Home</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                {cookieTemp[1] === 'true' ? (
                  <Link href={`/admin/${cookieTemp[0]}`}>
                    <a href={`/admin/${cookieTemp[0]}`}>Profile</a>
                  </Link>
                ) : (
                  <Link href="/user">
                    <a href="/user">Profile</a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                <Button onClick={logout}>Logout</Button>
              </Menu.Item>
              <Menu.Item disabled>{cookieTemp[0]}</Menu.Item>
            </Menu>
          </>
        )}
      </Header>
      <Content style={{ padding: '0 50px', backgroundColor: '#a7beae' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <div className="site-layout-content">
            {children}
          </div>
        </Breadcrumb>
      </Content>
      <Footer style={{ textAlign: 'center' }}>WEB ©2021 Created by CEID students</Footer>
    </Layout>
  );
}
