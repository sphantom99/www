import React from 'react';
import {
  Row, Col, Card, Divider,
} from 'antd';
import Image from 'next/image';
import FileUploader from '../components/FileUploader';

export default function UploadFile() {
  return (
    <>
      <Card title="File Uploader" extra={<a href="/user">Report a problem</a>}>
        <Row>
          <Col xs={11}>
            <FileUploader />
          </Col>
          <Col xs={1} />
          <Col xs={1}>
            <Divider type="vertical" style={{ height: '100%', backgroundColor: '#5f5f5f' }} />
          </Col>
          <Col xs={11}>
            <div>
              Here you can upload your har file, which will be proccessed and saved localy until you
              make a choice. You will be given two choices. Download and Upload.
              <br />
              <br />
              With Download you can download the proccessed file.
              <br />
              <br />
              With Upload you can upload the proccessed file to our server for us to analyze.
            </div>
            <Image src="/file.jpg" height={215} width={250} alt="Picture of the author" />
          </Col>
        </Row>
      </Card>
    </>
  );
}
