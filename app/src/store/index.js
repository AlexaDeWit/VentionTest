import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router'

import createRootReducer from './reducer'
import rootSaga, { sagaMiddleware } from '../sagas'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(history, initialState) {
  const routerMiddleware = createRouterMiddleware(history)

  const middleware = [
    sagaMiddleware,
    routerMiddleware
  ]

  const reducer = createRootReducer(history)
  const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(...middleware)))

  sagaMiddleware.run(rootSaga)

  return store
}