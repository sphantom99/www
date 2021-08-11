/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  Upload, message, Button, Row, Col, notification, Spin, Card, Statistic,
} from 'antd';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  InboxOutlined,
  LoadingOutlined,
  DownloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Router } from 'next/dist/client/router';
import cleanFile from '../lib/cleanFile';

const { Dragger } = Upload;

export default function FileUploader() {
  const router = useRouter();
  const [LoadingFlag, setLoadingFlag] = useState(false);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const props = {
    name: 'file',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        setLoadingFlag(true);
      }
      if (status === 'done') {
        setLoadingFlag(false);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
  };
  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'Notification Title',
      description: 'Something went wrong. Please check your file or try again later',
      btn,
      key,
      onClose: close,
    });
  };

  const [data, setData] = useState(null);
  const [info, setInfo] = useState({ ref: '', name: '' });
  const [server, setServer] = useState({ lat: '', long: '' });
  const [client, setClient] = useState({ lat: '', long: '' });
  const [fileInfo, setFileInfo] = useState({ name: null, size: null });
  // eslint-disable-next-line no-unused-vars
  const [isp, setIsp] = useState();

  async function lastUploadDate() {
    console.log('sending');
    axios
      .post('./api/addUploadToDB', { username: 'raven', data })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log('date asdasd');
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
    // router.refresh();
  }

  return (
    <div>
      <Row type="flex" justify="center" align="middle">
        <Col>
          <Dragger
            {...props}
            accept=".har"
            maxCount={1}
            beforeUpload={(file) => {
              const reader = new FileReader();
              reader.onload = (e) => {
                try {
                  const tempInfo = cleanFile(
                    e.target.result,
                    server,
                    setServer,
                    client,
                    setClient,
                    setIsp,
                  );
                  setInfo({ ...info, ref: tempInfo.ref, name: tempInfo.name });
                  setData(tempInfo.cleanJSON);
                  setFileInfo({ ...fileInfo, name: file.name, size: file.size });
                } catch (e) {
                  openNotification();
                }
              };
              reader.readAsText(file);
              // Prevent upload
              return false;
            }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or
              other band files
            </p>
          </Dragger>
          {fileInfo.name && (
            <Card size="small" title="File" style={{ width: 150 }}>
              <Statistic title="Name" value={fileInfo.name} precision={2} />
              <Statistic title="size" value={fileInfo.size} precision={2} />
            </Card>
          )}
          {LoadingFlag && !data && <Spin indicator={antIcon} />}
          {data && (
            <Row justify="space-around">
              <Col>
                <Button type="primary" icon={<DownloadOutlined />}>
                  <a href={info.ref} download={info.name} style={{ color: '#FFF' }}>
                    Download processed file
                  </a>
                </Button>
              </Col>
              <Col />
              <Col>
                <Button type="primary" icon={<UploadOutlined />} onClick={lastUploadDate}>
                  <a href="#" style={{ color: '#FFF' }}>
                    Upload processed file
                  </a>
                </Button>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
}
