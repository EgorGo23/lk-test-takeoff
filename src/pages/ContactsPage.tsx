import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MainLayout } from '@layouts';
import { ContactList } from '@features/contacts';
import { actions } from '@processes/contacts';

import { useAppDispatch } from '@store';

export const ContactsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getContacts());
  }, []);

  return (
    <MainLayout>
      <ContactList />
    </MainLayout>
  );
};
