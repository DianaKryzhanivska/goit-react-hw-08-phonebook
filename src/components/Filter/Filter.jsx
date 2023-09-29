import React from 'react';
import { Div, Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactForm/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleUpdateFilter = e => {
    const filter = e.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <Div>
      <Label htmlFor="filter">
        Find contacts by name
        <Input type="text" id="filter" onChange={handleUpdateFilter} />
      </Label>
    </Div>
  );
};
