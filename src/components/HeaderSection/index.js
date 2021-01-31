import React from 'react';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SearchForm from '../SearchForm';
import './styles.css';

export default function HeaderSection ({ handleInputChange, handleFormSubmit, value }) {
  return (
    <Paper>
      <Grid container direction="row"
        justify="space-between"
        alignItems="flex-start">
        <Grid item xs>
          <h1>Employee Directory</h1>
        </Grid>
        <Grid item xs>
          <SearchForm handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} value={value} />
        </Grid>
      </Grid>
    </Paper>
  );
}
