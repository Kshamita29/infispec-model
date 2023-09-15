import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter basename='process.env.REACT_APP_FOR_PATH'>
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
