import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import logo from './logo.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h2>关于页面</h2>
    <img src={logo} alt="logo" />
  </React.StrictMode>
);