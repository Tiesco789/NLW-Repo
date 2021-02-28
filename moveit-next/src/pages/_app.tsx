import React, { useState } from 'react';

import { ChallangesProvider } from '../contexts/ChallangeContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {

  return (
    <Component {...pageProps} />
  )
}

export default MyApp;
