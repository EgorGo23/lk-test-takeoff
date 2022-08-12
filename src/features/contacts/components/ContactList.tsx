import React from 'react';

import { useAppSelector } from '@store';

import { selectors } from '../selectors';

export const ContactList = (): JSX.Element => {
  const contacts = useAppSelector(selectors.contactsSelector);
  console.log(contacts);
  return <div></div>;
};
