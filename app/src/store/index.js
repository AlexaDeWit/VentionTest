import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router'

import createRootReducer from './reducer'
import rootSaga from '../sagas'

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export default function configureStore(history, initialState) {
  const routerMiddleware = createRouterMiddleware(history)
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [
    routerMiddleware,
    sagaMiddleware
  ]

  const reducer = createRootReducer(history)
  const enhancer = composeEnhancers(applyMiddleware(...middleware))

  const store = createStore(reducer, initialState, enhancer)

  sagaMiddleware.run(rootSaga)

  return store
}