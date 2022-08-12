import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const toShowLoader = (): boolean => {
  return true;
};

const toHideLoader = (): boolean => {
  return false;
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoader: toShowLoader,
    hideLoader: toHideLoader,
  },
});

export const loadingReducer = loadingSlice.reducer;

export const actions = {
  ...loadingSlice.actions,
};
