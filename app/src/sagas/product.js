import { LIST_REQ, Actions } from '../store/product/actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import * as ProductApi from '../api/products'

export function* list() {
  try {
    const data = yield call(ProductApi.list)
    const { products, count } = data
    yield put(Actions.listResp(products, count))
  } catch (err) {
    yield put(Actions.listErr(err.message))
  }
}

export default function* sagas() {
  yield takeLatest(LIST_REQ, list)
}