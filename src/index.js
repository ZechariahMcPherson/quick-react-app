
/*
import reducer from './reducers/index.js';
import './index.css';
import App from './App.js';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);
​
render(
  <Provider store={store}>
    <App />
  </Provider>
  document.getElementById('root')
)
import reducer from './reducers/index.js';


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
​
const store = createStore(reducer)
​
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from "./reducers/homeComponentsReducer.js";

import App from "./App.js";


const store=createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
