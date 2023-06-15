import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer, FilterInput } from './Filter.styled';
import { selectFilter } from 'redux/filterSlice';
import { updateFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(updateFilter(value));
  };

  return (
    <FilterContainer>
      <label htmlFor="filterInput">Find contacts by name</label>
      <FilterInput
        id="filterInput"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </FilterContainer>
  );
};

export default Filter;
