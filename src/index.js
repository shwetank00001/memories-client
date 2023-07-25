import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore,applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk'

import reducer from './reducer'

const store = createStore(reducer, compose(applyMiddleware(thunk)))
// provider allows us to access the global state ( STORE ) that can be accessed anywhere
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

