import { SagaIterator } from 'redux-saga';
import { all, takeEvery, call, put } from 'redux-saga/effects';

import { actions as loadingActions } from '@features/loading';
import { sagas } from '@features/contacts';

import { actions } from './actions';

function* getContactsProcess(): SagaIterator {
  try {
    yield put(loadingActions.showLoader());

    yield call(sagas.getContacts);

    yield put(loadingActions.hideLoader());
  } catch (error) {
    console.log(error);
  }
}

export function* contactsWatcher(): SagaIterator {
  yield all([takeEvery(actions.getContacts, getContactsProcess)]);
}
