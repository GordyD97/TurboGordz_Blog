import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return(
  <Layout>
      < Component {...pageProps} />
  </Layout>

  );
}

export default MyApp
  
