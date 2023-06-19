import * as contactsApiAll from 'api/contactsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContactsAll',
  async () => {
    const contacts = await contactsApiAll.fetchContactsAPI();
    return contacts;
  }
);

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());

//     try {

//     const contacts = await contactsApiAll.fetchContactsAPI();
//         dispatch(contactsActions.fetchContactsSuccess(contacts));

//     } catch (error) {
//         dispatch(contactsActions.fetchContactsError());
//   }
// };
