// Global ES6 polyfill, using the full component for safety and simplicity
// In some settings it might be better to use only the needed features though
// to reduce size.
import 'core-js'
//Module imports
import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import './index.css';
import createStore from './store'
import { createBrowserHistory } from 'history'
import App from './App';

const history = createBrowserHistory()
const store = createStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

