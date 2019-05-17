import { spawn, call, takeEvery, select } from 'redux-saga/effects'

function* storeErrors() {
  yield takeEvery((action) => action && action.payload && action.payload.err, function*(action) {
    yield select()
    const { err } = action.payload
    throw err
  })
}

export default function* rootSaga() {

  const sagas = [
    storeErrors
  ]

  yield sagas.map((saga) =>
    spawn(function*() {
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
  )
}