import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
const app = document.getElementById('root');

if (!app) {
  throw new Error('No app found');
}

const root = ReactDOM.createRoot(app);

root.render(<App />);
