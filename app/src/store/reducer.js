import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { default as product } from './product/reducer'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    product,
  })
