import React from 'react';
import {
  Carousel, Row, Col, Card, Divider,
} from 'antd';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import FileUploader from '../components/FileUploader';

const contentStyle = {
  height: '220px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
}));
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

/* <Carousel autoplay>
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
          </Carousel> */
