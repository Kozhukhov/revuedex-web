import { StoreToken } from './constants';
import { applicationReducer } from 'containers/Application/reducer';

export const rootReducer = {
  [StoreToken.APPLICATION]: applicationReducer,
};
