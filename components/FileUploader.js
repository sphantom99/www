/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  Upload,
  message,
  Button,
  Row,
  Col,
  notification,
  Spin,
  Card,
  Statistic,
  Space,
} from 'antd';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  InboxOutlined,
  LoadingOutlined,
  DownloadOutlined,
  UploadOutlined,
  ClearOutlined,
} from '@ant-design/icons';
import { Router } from 'next/dist/client/router';
import cookie from 'js-cookie';
import Image from 'next/image';
import cleanFile from '../lib/cleanFile';

const { Dragger } = Upload;

export default function FileUploader() {
  const router = useRouter();
  const [LoadingFlag, setLoadingFlag] = useState(false);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const cook = cookie.get('secret')?.split(',');
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
  const openNotification = (errorTitle, errorMessage) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => notification.close(key)}
        style={{ backgroundColor: errorTitle === 'Success' ? '#43c333' : '#ee3737' }}
      >
        Confirm
      </Button>
    );
    notification.open({
      message: errorTitle,
      description: errorMessage,
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
    // console.log('sending');
    axios
      .post('./api/addUploadToDB', { username: cook[0], data })
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          // console.log('date asdasd');
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
            showUploadList={false}
            maxCount={1}
            beforeUpload={(file) => {
              const reader = new FileReader();
              reader.onload = async (e) => {
                try {
                  const tempInfo = await cleanFile(
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
                  openNotification('Success', 'Your file has been uploaded to our servers');
                } catch (e) {
                  openNotification(
                    'Error',
                    'Something went wrong. Please check your file or try again later',
                  );
                  setLoadingFlag(false);
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
          {/* {fileInfo.name && (
            <Card size="small" title="File" style={{ width: 150 }}>
              <Statistic title="Name" value={fileInfo.name} precision={2} />
              <Statistic
                title="size"
                value={`${(fileInfo.size / 1024 / 1024).toFixed(2)} mb`}
                precision={2}
              />
            </Card>
          )} */}
          {LoadingFlag && !data && <Spin indicator={antIcon} />}
          {data && (
            <>
              <Row justify="space-around">
                <Col xs={12}>
                  <Card size="small" title="File Information" style={{ width: 150 }}>
                    <Statistic title="Name" value={fileInfo.name} precision={2} />
                    <Statistic
                      title="size"
                      value={`${(fileInfo.size / 1024 / 1024).toFixed(2)} mb`}
                      precision={2}
                    />
                  </Card>
                </Col>
                <Col xs={12}>
                  <Space direction="vertical">
                    <span />
                    <Button
                      shape="round"
                      F
                      icon={<UploadOutlined />}
                      onClick={lastUploadDate}
                    >
                      <a>Upload processed file</a>
                    </Button>
                    <span />
                    <span />
                    <span />
                    <Button shape="round" icon={<DownloadOutlined />}>
                      <a href={info.ref} download={info.name}>
                        Download processed file
                      </a>
                    </Button>
                    <span />
                    <span />
                    <span />
                    <Button
                      shape="round"
                      F
                      danger
                      icon={<ClearOutlined />}
                      onClick={() => {
                        setData(null);
                        setLoadingFlag(false);
                      }}
                    >
                      Clear Upload
                    </Button>
                  </Space>
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}
