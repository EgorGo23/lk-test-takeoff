import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@store';

import { IContacts, IContactsStore } from './types';

const contactsModuleSelector = (state: RootState): IContactsStore => state['contacts'];

const contactsSelector = createSelector(
  contactsModuleSelector,
  (data): IContacts => data.contacts ?? [],
);

export const selectors = {
  contactsSelector,
};
