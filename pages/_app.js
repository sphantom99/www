/* eslint-disable react/jsx-props-no-spreading */
import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';
import '../styles/login.css';
import React from 'react';
import CustomLayout from '../components/CustomLayout';

export default function MyApp({ Component, pageProps }) {
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
}
