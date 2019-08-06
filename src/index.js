import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import productStoreApp from './reducers/productReducer'

const store = createStore(productStoreApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)