import createSagaMiddleware from 'redux-saga';
import { createDispatchHook, createSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { storeContext } from './context';

export const onSagaError = (e: Error) => {
  if (__DEV__) {
    console.error(e);
  }
};

export const createStore = () => {
  const sagaMiddleware = createSagaMiddleware({
    onError: onSagaError,
  });

  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: __DEV__,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export type GlobalState = ReturnType<
  ReturnType<typeof createStore>['getState']
>;

export const useDispatch = createDispatchHook(storeContext);

export const useSelector = createSelectorHook(storeContext);

export const store = createStore();
