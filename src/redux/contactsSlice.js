import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts } from './operation';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const getContactsAction = () => {
  return async (dispatch) => {
    try {
      dispatch(contactsSlice.actions.fetchingInProgress())
    const data = await fetchContacts()
    dispatch(contactsSlice.actions.fetchingSuccess(data))
    } catch (error) {
      dispatch(contactsSlice.actions.fetchingError(error))
    }
   
  }
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { saveContact, deleteContact, updateFilter } =
  contactsSlice.actions;

export default contactsSlice.reducer;

// SELECTORS !!!!!!!!!!!!!!!!!!!!!!!!!!

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     saveContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     updateFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { saveContact, deleteContact, updateFilter } =
//   contactsSlice.actions;

// export default contactsSlice.reducer;

// // SELECTORS !!!!!!!!!!!!!!!!!!!!!!!!!!

// export const selectContacts = state => state.contacts;
// export const selectFilter = state => state.filter;
