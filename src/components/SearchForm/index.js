import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '55ch'
    },
  },
  button: {
    width: '20ch',
    height: '7ch'
  },
  field: {
    height: '7ch'
  }
}));

export default function SearchForm ({handleInputChange, handleFormSubmit, value}) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="search" value={value} onChange={handleInputChange} name="searchInput" label="Search" variant="outlined" className={classes.field} />
      <Button type="submit" onClick={handleFormSubmit} variant="contained" size="medium" color="primary" className={classes.button}>Search</Button>
    </form>
  )
}
