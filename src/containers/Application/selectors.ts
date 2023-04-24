import { flow } from 'fp-ts/lib/function';
import type { GlobalState } from 'store';
import { StoreToken } from 'store/constants';

type StateSlice = Pick<GlobalState, StoreToken.APPLICATION>;

export const applicationSelector = (
  state: StateSlice,
): StateSlice[StoreToken.APPLICATION] => state[StoreToken.APPLICATION];

export const companySelector = flow(
  applicationSelector,
  (application) => application.company,
);
