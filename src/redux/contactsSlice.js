import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsAPI, saveContactAPI, deleteContactAPI } from 'api/contactsApi';




export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await fetchContactsAPI();
  return response.data;
});

export const saveContact = createAsyncThunk('contacts/saveContact', async (contact) => {
  const response = await saveContactAPI(contact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await deleteContactAPI(contactId);
  return contactId;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(saveContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(saveContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const selectContacts = (state) => state.contacts.items;
// export const selectLoading = (state) => state.contacts.isLoading;
// export const selectError = (state) => state.contacts.error;


export const contactsReducer =  contactsSlice.reducer;