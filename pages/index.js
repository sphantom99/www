import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typography, Carousel } from 'antd';

// eslint-disable-next-line no-unused-vars
const { title, Text } = Typography;
const content = {
  marginTop: '100px',
  width: '80%',
  margin: '0 auto',
  padding: '20px',
};

export default function Home() {
  return (
    <div style={content}>
      <div className="text-center mb-5">
        <h1>
          Welcome to
          <br />
          HARHUB
        </h1>
        <Link href="/login">
          <h2>
            <a href="/login">
              <Text strong style={{ color: '#2596be' }}>
                {' '}
                Press me to procced
                {' '}
              </Text>
            </a>
          </h2>
        </Link>
      </div>
      <Carousel autoplay dotPosition="top">
        <div>
          <Image
            src="/HarHub-logos2.jpeg"
            className="logo"
            height="900"
            width="900"
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/carousel2.jpg"
            className="logo"
            height="600"
            width="900"
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/carousel3.jpg"
            className="logo"
            height="600"
            width="900"
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/carousel4.jpg"
            className="logo"
            height="600"
            width="900"
            alt="Picture of the author"
          />
        </div>
      </Carousel>
    </div>
  );
}
