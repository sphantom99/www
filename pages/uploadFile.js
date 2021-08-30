import React from 'react';
import { Carousel, Row, Col } from 'antd';
import Image from 'next/image';
import FileUploader from '../components/FileUploader';

const contentStyle = {
  height: '220px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default function UploadFile() {
  return (
    <>
      <Row>
        <Col xs={5} />
        <Col xs={14}>
          <FileUploader />
        </Col>
        <Col xs={5} />
        <Col xs={24}>
          <span />
          <span />
          <span />
          <span />
        </Col>
        <Col xs={7} />
        <Col xs={10}>
          {/* <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>Communication</h3>
            </div>
            <div>
              <Image height={200} width={600} src="/map.jpg" alt="Picture of the author" />
            </div>
            <div>
              <h3 style={contentStyle}>Development</h3>
            </div>
            <div>
              <Image height={200} width={600} src="/statistics.jpg" alt="Picture of the author" />
            </div>
          </Carousel> */}
        </Col>
        <Col xs={7} />
      </Row>
    </>
  );
}
