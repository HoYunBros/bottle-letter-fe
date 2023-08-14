import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot, atom } from 'recoil';
import { MantineProvider } from '@mantine/core';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </MantineProvider>
  </React.StrictMode>
);
