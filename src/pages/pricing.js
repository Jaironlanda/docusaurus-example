import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Pricing() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Hello Page!
        </p>
        <Link to={'/morepage'}>more page here</Link>
      </div>
    </Layout>
  );
}