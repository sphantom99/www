import React from 'react';
// Custom DatePicker that uses Day.js instead of Moment.js

import { SmileFilled } from '@ant-design/icons';

import Link from 'next/link';

const content = {
  marginTop: '100px',
};

export default function Home() {
  return (
    <div style={content}>
      <div className="text-center mb-5">
        <Link href="/login">
          <a href="/login">
            <SmileFilled size={48} strokeWidth={1} />
          </a>
        </Link>

        <p className="mb-0 mt-3 text-disabled">Welcome to HARHUB !</p>
      </div>
    </div>
  );
}
