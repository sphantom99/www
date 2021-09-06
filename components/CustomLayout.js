/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  Layout, Menu, Breadcrumb, Button, Typography, Drawer, Space, Switch,
} from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import Link from 'next/link';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
export default function CustomLayout({ children }) {
  const router = useRouter();
  const cook = cookie.get('secret');
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  async function logout() {
    console.log('loggin gout ');
    cookie.remove('secret');
    router.push('/login');
  }
  const cookieTemp = cook?.split(',');
  const path = router.asPath.split('/')[1] === 'admin';
  const [mode, setMode] = useState('#111');
  async function deleteEntries() {
    await axios.get('http://localhost:3000/api/deleteEntries').then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
  }

  function onChange(checked) {
    if (checked) {
      setMode('#111');
    } else {
      setMode('#fff');
    }
  }
  return (
    <Layout className="layout">
      <Header
        style={{
          backgroundColor: '#363636',
          position: 'fixed',
          zIndex: 1,
          width: '100%',
        }}
      >
        <div
          style={{
            height: '20px',
            position: 'absolute',
            zIndex: 2,
            left: '500px',
          }}
        >
          {/* <h1>
            <span>H</span>
            <span>H</span>
          </h1> */}
        </div>
        {cook ? (
          <>
            <Menu style={{ backgroundColor: '#363636' }} theme="dark" mode="horizontal">
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
              <SubMenu
                key="SubMenu"
                style={{ float: 'right', backgroundColor: '#363636' }}
                icon={<SettingOutlined />}
                title={(
                  <Text strong style={{ color: '#ffffff' }}>
                    {cookieTemp[0]}
                  </Text>
                )}
              >
                <Menu.Item key="setting:1" style={{ backgroundColor: '#363636' }}>
                  Dark Mode
                  <Switch defaultChecked onChange={onChange} />
                </Menu.Item>
                <Menu.Item style={{ float: 'right', color: '#ffffff' }}>
                  <a onClick={logout}>
                    <Text strong style={{ color: '#ffffff' }}>
                      Logout
                    </Text>
                  </a>
                </Menu.Item>
              </SubMenu>
              {/* <Menu.Item style={{ float: 'right' }} disabled>
                <Text strong style={{ color: '#ffffff' }} copyable>
                  {cookieTemp[0]}
                </Text>
              </Menu.Item> */}

              <Menu.Item style={{ float: 'right' }} className="customclass">
                <a onClick={showDrawer}>
                  <Text strong style={{ color: '#ffffff' }}>
                    Special Actions
                  </Text>
                </a>
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu style={{ backgroundColor: '#363636' }} theme="dark" mode="horizontal">
            <Menu.Item style={{ float: 'right' }} className="customclass">
              <a onClick={showDrawer}>
                <Text strong style={{ color: '#ffffff' }}>
                  Special Actions
                </Text>
              </a>
            </Menu.Item>
          </Menu>
        )}
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          backgroundColor: mode,
          marginTop: 64,
          height: path ? null : '100vh',
        }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
            {children}
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <Space direction="vertical">
                {cook ? (
                  <>
                    <Button type="primary" danger onClick={deleteEntries}>
                      Delete all entries
                    </Button>
                    Dark Mode
                    <Switch defaultChecked onChange={onChange} />
                  </>
                ) : (
                  <>
                    Dark Mode
                    <Switch defaultChecked onChange={onChange} />
                  </>
                )}
              </Space>
            </Drawer>
          </div>
        </Breadcrumb>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          // position: 'fixed',
          // bottom: '0',
          // width: '100%',
          backgroundColor: '#363636',
        }}
      >
        <Text strong style={{ color: '#ffffff' }}>
          WEB ©2021 Created by CEID students
        </Text>
      </Footer>
    </Layout>
  );
}
