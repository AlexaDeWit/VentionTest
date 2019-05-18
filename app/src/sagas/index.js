import { spawn, call, all } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import product from './product'

export default function* rootSaga() {

  const sagas = [
    product,
  ]

  yield all(sagas.map((saga) =>
    spawn(function* () {
      // Restart any crashing sagas.
      while (true) {
        try {
          yield call(saga)
          break
        } catch (err) {
          // Log all saga erros.
          console.error(err)
        }
      }
    }),
  ))

}

export const sagaMiddleware = createSagaMiddleware()
