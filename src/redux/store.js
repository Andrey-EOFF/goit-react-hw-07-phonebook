import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReduce } from './filterSlice';

export const store = configureStore({
  reducer: {
    tasks: contactsReducer,
    filters: filtersReduce,
  },
});
