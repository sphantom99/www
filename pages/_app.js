/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-props-no-spreading */
import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';
import '../styles/login.css';
import React, { createContext, useState } from 'react';
import CustomLayout from '../components/CustomLayout';

export const MyContext = createContext();
export default function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <MyContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </MyContext.Provider>
  );
}
