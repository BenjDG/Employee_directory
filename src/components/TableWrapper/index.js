import { Table, TableContainer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import MyTableBody from '../MyTableBody';
import MyTableHeader from '../MyTableHeader';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TableWrapper (props) {
  const classes = useStyles();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="User Directory">
          <MyTableHeader />
          <MyTableBody {...props} />
        </Table>
      </TableContainer>
    </div>
  )
}