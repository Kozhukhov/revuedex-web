import { call } from 'typed-redux-saga/macro';

export function* initializeSaga() {
  console.log('initSaga');
}

export function* applicationSagaWatcher() {
  yield* call(initializeSaga);
}
