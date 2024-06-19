import '@styles/fonts.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import ProvidersTree from './ProvidersTree.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProvidersTree>
      <App />
    </ProvidersTree>
  </React.StrictMode>,
);
