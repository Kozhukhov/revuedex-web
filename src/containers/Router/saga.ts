import { call, takeLatest } from 'typed-redux-saga/macro';
import { history } from './history';
import { pushNextUrl } from './actions';

export function* push(path: string) {
  yield* call([history, 'push'], {
    pathname: path,
    search: location.search,
  });
}

export function* goTo({ payload }: { payload: string }) {
  yield* call(push, payload);
}

export function* routerSagaWatcher() {
  yield* takeLatest(pushNextUrl, goTo);
}
