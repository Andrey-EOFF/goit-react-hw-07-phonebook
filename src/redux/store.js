import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
// import { filtersReduce } from './filterSlice';

import contactsReducer from './contacts/contactsReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filtersReduce,
//   },
// });
