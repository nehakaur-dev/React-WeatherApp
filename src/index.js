import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <footer>
    Open source code by <a href='https://github.com/nehakaur-dev/React-WeatherApp'>Neha kaur</a>
    </footer>
  </React.StrictMode>
);


reportWebVitals();
