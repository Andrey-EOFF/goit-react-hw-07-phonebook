import { createAction } from '@reduxjs/toolkit';

export const fetchContactsReauest = createAction(
  'contacts/fetchContactsReauest'
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess'
);
export const fetchContactsError = createAction('contacts/fetchContactsError');
