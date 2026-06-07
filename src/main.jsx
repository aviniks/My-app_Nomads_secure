import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';

const redirectPath = sessionStorage.getItem('nomadssecure.redirect');

if (redirectPath) {
  sessionStorage.removeItem('nomadssecure.redirect');
  window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
