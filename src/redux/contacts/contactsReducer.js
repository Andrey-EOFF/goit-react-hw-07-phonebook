import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContactsError,
  fetchContactsReauest,
  fetchContactsSuccess,
} from './contactsActions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContactsReauest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload,
  [fetchContactsReauest]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
