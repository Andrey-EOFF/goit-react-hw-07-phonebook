import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsAPI, saveContactAPI, deleteContactAPI } from 'api/contactsApi';

export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
fetchContactsAPI()
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  newData => saveContactAPI(newData)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  contactId => deleteContactAPI(contactId)
);