import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from 'antd';

const { Title } = Typography;
const content = {
  marginTop: '100px',
};

export default function Home() {
  return (
    <div style={content}>
      <div className="text-center mb-5">
        <Title>Welcome to</Title>
        <Link href="/login">
          <h1>
            <a href="/login">Press Here to procced</a>
          </h1>
        </Link>
      </div>
      <Image
        src="/HarHub-logos2.jpeg"
        className="logo"
        height="1000"
        width="1000"
        alt="Picture of the author"
      />
    </div>
  );
}
