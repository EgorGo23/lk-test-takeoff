import { SagaIterator } from 'redux-saga';
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { actions } from './ducks';

function* getContacts(): SagaIterator {
  const { data } = yield call(axios.get, 'http://localhost:3034/contacts');

  yield put(actions.setContacts(data));
}

export const sagas = {
  getContacts,
};
