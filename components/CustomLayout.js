import {
  Layout, Menu, Breadcrumb, Button, Typography,
} from 'antd';

import React from 'react';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import Link from 'next/link';

const { Text } = Typography;
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
  const path = router.asPath.split('/')[1] === 'admin';
  return (
    <Layout className="layout">
      <Header
        style={{
          backgroundColor: '#315f72',
          position: 'fixed',
          zIndex: 1,
          width: '100%',
        }}
      >
        {cook && (
          <>
            <Menu style={{ backgroundColor: '#315f72' }} theme="dark" mode="horizontal">
              <Menu.Item>
                <Link href="/uploadFile">
                  <a href="/uploadFile">
                    <Text strong style={{ color: '#ffffff' }}>
                      Upload File
                    </Text>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                {cookieTemp[1] === 'true' ? (
                  <Link href={`/admin/${cookieTemp[0]}`}>
                    <a href={`/admin/${cookieTemp[0]}`}>
                      <Text strong style={{ color: '#ffffff' }}>
                        Profile
                      </Text>
                    </a>
                  </Link>
                ) : (
                  <Link href={`/user/${cookieTemp[0]}`}>
                    <a href={`/user/${cookieTemp[0]}`}>
                      <Text strong style={{ color: '#ffffff' }}>
                        Profile
                      </Text>
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item style={{ float: 'right' }} disabled>
                <Text strong style={{ color: '#ffffff' }} copyable>
                  {cookieTemp[0]}
                </Text>
              </Menu.Item>
              <Menu.Item style={{ float: 'right', color: '#ffffff' }}>
                <Button shape="round" onClick={logout}>
                  Logout
                </Button>
              </Menu.Item>
            </Menu>
          </>
        )}
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          backgroundColor: '#a7beae',
          marginTop: 64,
          height: path ? null : '100vh',
        }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
            {children}
          </div>
        </Breadcrumb>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          // position: 'fixed',
          // bottom: '0',
          // width: '100%',
          backgroundColor: '#315f72',
        }}
      >
        <Text strong style={{ color: '#ffffff' }}>
          WEB ©2021 Created by CEID students
        </Text>
      </Footer>
    </Layout>
  );
}
