import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const selectFilter = state => state.filter;

export const filtersReduce = filterSlice.reducer;
