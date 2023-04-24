import { all, fork } from 'typed-redux-saga/macro';
import { applicationSagaWatcher } from 'containers/Application/saga';

export function* rootSaga() {
  yield* all([fork(applicationSagaWatcher)]);
}
