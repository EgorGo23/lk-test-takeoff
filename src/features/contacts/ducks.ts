import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IContacts, IContactsStore } from './types';

const initialState: IContactsStore = {
  contacts: [],
};

const toSetContacts = (state: IContactsStore, { payload }: PayloadAction<IContacts>): void => {
  state['contacts'] = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: toSetContacts,
  },
});

export const contactsReducer = contactsSlice.reducer;

export const actions = {
  ...contactsSlice.actions,
};
