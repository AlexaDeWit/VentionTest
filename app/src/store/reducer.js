import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { default as product } from './product/reducer'
import { default as cart } from './cart/reducer'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    product,
    cart,
  })
