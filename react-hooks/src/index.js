import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {CounterProvider} from './Context';

ReactDOM.render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
