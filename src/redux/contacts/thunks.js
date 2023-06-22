import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContactsAPI,
  saveContactAPI,
  deleteContactAPI,
} from 'api/contactsApi';

export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchContactsAPI()
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await saveContactAPI(newContact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await deleteContactAPI(contactId);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
