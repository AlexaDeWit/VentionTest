import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import './index.css';
import createStore from './store'
import createHistory from 'history/createBrowserHistory'
import App from './App';

const history = createHistory()
const store = createStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

