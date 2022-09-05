import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './styles/global.css';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
