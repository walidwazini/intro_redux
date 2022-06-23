import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import Store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={Store} >
    <App />
  </Provider>
  , document.getElementById('root'));
