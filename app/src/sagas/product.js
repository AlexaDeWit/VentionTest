import { LIST_REQ, Actions } from '../store/product/actions'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* list() {
  try {
    const products = undefined
    const count = undefined
    yield put(Actions.listResp(products, count))
  } catch (err) {
    yield put(Actions.listErr(err))
  }
}

export default function* sagas() {
  yield takeLatest(LIST_REQ, list)
}