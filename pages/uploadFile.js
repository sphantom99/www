import React, { useContext } from 'react';
import {
  Row, Col, Card, Divider,
} from 'antd';
import Image from 'next/image';
import FileUploader from '../components/FileUploader';
import { MyContext } from './_app';

export default function UploadFile() {
  const context = useContext(MyContext);
  return (
    <>
      <Card
        style={{
          borderRadius: '25px',
          backgroundColor: context.darkMode ? '#333' : '#fff',
        }}
      >
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
              <p style={{ color: context.darkMode ? '#fff' : '#222' }}>
                Here you can upload your har file, which will be proccessed and saved localy until
                you make a choice. You will be given two choices. Download and Upload.
              </p>
              <br />

              <p style={{ color: context.darkMode ? '#fff' : '#222' }}>
                With Download you can download the proccessed file.
              </p>
              <br />

              <p style={{ color: context.darkMode ? '#fff' : '#222' }}>
                With Upload you can upload the proccessed file to our server for us to analyze.
              </p>
            </div>
            <div style={{ borderRadius: '25px' }}>
              <Image
                src="/file.jpg"
                style={{ borderRadius: '25px' }}
                height={215}
                width={250}
                alt="Picture of the author"
              />
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
