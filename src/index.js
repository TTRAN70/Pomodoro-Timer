import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const head = document.getElementsByTagName('HEAD')[0];
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Anton&display=swap';
const link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.href = "https://fonts.googleapis.com/css2?family=Kanit&display=swap";
const link3 = document.createElement('link');
link3.rel = 'stylesheet';
link3.href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap";
head.appendChild(link);
head.appendChild(link2);
head.appendChild(link3);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
