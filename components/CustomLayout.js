import {
  Layout, Menu, Breadcrumb, Button,
} from 'antd';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const { Header, Content, Footer } = Layout;

export default function CustomLayout({ children }) {
  const router = useRouter();
  const [session, setSession] = useState();
  async function logout() {
    console.log('loggin gout ');
    axios
      .get('./api/logout')
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log('Loged out');
          router.push('/login');
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  useEffect(() => {
    axios
      .get('./api/getCookie')
      .then((response) => {
        if (response.status === 200) {
          setSession(response.data.session);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  // useEffect(() => {}, [session]);
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <a href="/uploadFile">Home</a>
          </Menu.Item>
          <Menu.Item>
            <a href="/user">Profile</a>
          </Menu.Item>
          <Menu.Item>
            <Button
              onClick={() => {
                logout();
                setSession('');
              }}
            >
              Logout
            </Button>
          </Menu.Item>
          <Menu.Item>{session}</Menu.Item>
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
