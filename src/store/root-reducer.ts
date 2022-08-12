import { combineReducers } from 'redux';

import { contactsReducer } from '@features/contacts';
import { loadingReducer } from '@features/loading';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  loading: loadingReducer,
});

export default rootReducer;
