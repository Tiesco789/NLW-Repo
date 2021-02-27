import React, { useState } from 'react';

import { ChallangesProvider } from '../contexts/ChallangeContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {

  return (
    <ChallangesProvider>
      <Component {...pageProps} />
    </ChallangesProvider>
  )
}

export default MyApp;
