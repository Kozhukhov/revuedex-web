import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreToken } from 'store/constants';
import { ApplicationModel } from './model';

export const initialState = new ApplicationModel();

const applicationSlice = createSlice({
  name: StoreToken.APPLICATION,
  initialState,
  reducers: {
    setCompany: (state, { payload }: PayloadAction<string>) =>
      state.setCompany(payload),
  },
});

export const applicationReducer = applicationSlice.reducer;

export const { setCompany } = applicationSlice.actions;
