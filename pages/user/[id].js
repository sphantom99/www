/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import {
  Card, Row, Col, Form, Input, Button, Statistic, notification,
} from 'antd';
import Link from 'next/link';
import cookie from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const username = context.params.id;
  const info = await axios
    .post('http://localhost:3000/api/getUserPassword', { username })
    .then((response) => {
      if (response.status === 200) {
        // console.log(response.data);
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
  const stats = await axios
    .post('http://localhost:3000/api/getUserStatistics', { username })
    .then((response) => {
      if (response.status === 200) {
        return {
          count: response.data.count,
          lastUpload: response.data.date[0].last_upload_data,
        };
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
  return {
    props: {
      info,
      stats,
    },
  };
}

export default function User(props) {
  const { stats, info } = props;
  console.log(info);
  const [count, setCount] = useState(stats.count);
  const [lastUpload, setLastUpload] = useState(stats.lastUpload);
  const username = cookie.get('secret')?.split(',')[0];
  const router = useRouter();

  const openNotification = (title, message) => {
    notification.open({
      message: title,
      description: message,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  const onFinish = async (values) => {
    if (values.passwordOld === info.passwordHash) {
      console.log('Success:', values);
      axios
        .post('http://localhost:3000/api/changeUsernamePassword', {
          password: values.passwordNew,
          username: values.username,
        })
        .then((response) => {
          if (response.status === 200) {
            openNotification('SUCCESS', 'Password changed.');
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else if (values.passwordOld !== info.passwordHash) {
      openNotification('ERROR', 'Old password doesnt match.');
    }
  };

  return (
    <div>
      <Row>
        <Col xs={10}>
          <Card
            title="Change Username/Password"
            extra={<a href="/user">Report a problem</a>}
            style={{ width: 500 }}
          >
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ username }}
              onFinish={onFinish}
              onFinishFailed={() => openNotification('error accured')}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input autoComplete="off" />
              </Form.Item>

              <Form.Item
                label=" Old Password"
                name="passwordOld"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password autoComplete="off" />
              </Form.Item>
              <Form.Item
                label=" New Password"
                name="passwordNew"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password autoComplete="off" />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Change
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={2} />
        <Col xs={10}>
          <Card
            title="Statistics"
            extra={<a href="/user">Report a problem</a>}
            style={{ width: 500 }}
          >
            <Row>
              <Col xs={10}>
                <Statistic title="Last upload" value={lastUpload} />
              </Col>
              <Col xs={4} />
              <Col xs={10}>
                <Statistic title="Files uploaded" value={count} />
              </Col>
            </Row>
          </Card>
          <Card title="Heatmap" extra={<a href="/user">Report a problem</a>} style={{ width: 500 }}>
            <Link href="/heatmap">Crowd Distribution</Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
