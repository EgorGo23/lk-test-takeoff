import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { contactsWatcher } from '@processes/contacts';

export function* rootSaga(): SagaIterator {
  yield all([contactsWatcher].map(fork));
}
