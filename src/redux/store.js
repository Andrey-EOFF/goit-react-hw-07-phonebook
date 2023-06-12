import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts/contactsReducer'


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: ""
  }
});

