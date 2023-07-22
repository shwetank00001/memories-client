import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createStore,applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk'

import reducer from './reducer'

const store = createStore(reducer, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

