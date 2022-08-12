import { createAction } from '@reduxjs/toolkit';

const getContacts = createAction('getContacts');

export const actions = {
  getContacts,
};
