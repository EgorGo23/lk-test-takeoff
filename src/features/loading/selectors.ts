import { RootState } from '@store';

import { LoadingStore } from './types';

const loadingSelector = (state: RootState): LoadingStore => state['loading'];

export const selectors = {
  loadingSelector,
};
