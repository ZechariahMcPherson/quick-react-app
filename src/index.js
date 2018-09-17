
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/


import { reducer } from 'reducers/index.js';
import './index.css';
import App from './App.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const store = createStore(reducer);
​
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  document.getElementById('root')
)
