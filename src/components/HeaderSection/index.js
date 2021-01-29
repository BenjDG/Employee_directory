import React from 'react';
import { Paper } from '@material-ui/core';
import SearchForm from '../SearchForm';

export default function HeaderSection ({handleInputChange, handleFormSubmit}) {
  return (
    <Paper>
      <h1>Employee Directory</h1>
      <SearchForm handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit}/>
    </Paper>
  );
}
