/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  Upload, message, Input, Button, Row, Col, notification,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import downloadFile from '../lib/downloadFile';

const { Dragger } = Upload;
const { TextArea } = Input;

export default function FileUploader() {
  const props = {
    name: 'file',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        // console.log(info.file, info.fileList);
      }
      if (status === 'done') {
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
                  const tempInfo = downloadFile(e.target.result);
                  setInfo({ ...info, ref: tempInfo.ref, name: tempInfo.name });
                  setData(e.target.result);
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
          <TextArea rows={4} value={data} />
          {data && (
            <>
              <Button>
                <a href={info.ref} download={info.name}>
                  Download processed file
                </a>
              </Button>
              <Button>Upload processed file to server</Button>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}
