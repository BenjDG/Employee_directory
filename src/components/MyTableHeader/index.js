import { TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';
import React from 'react';

export default function MyTableHeader (props) {
  return (
    <TableHead>
      <TableRow>
        <TableCell id='pic'>Picture</TableCell>
        <TableCell><TableSortLabel id='fname' onClick={props.onClick} hideSortIcon={true}>First Name</TableSortLabel></TableCell>
        <TableCell><TableSortLabel id='lname' onClick={props.onClick} hideSortIcon={true}>Last Name</TableSortLabel></TableCell>
        <TableCell><TableSortLabel id='currentCity' onClick={props.onClick} hideSortIcon={true}>City</TableSortLabel></TableCell>
        <TableCell><TableSortLabel id='currentState' onClick={props.onClick} hideSortIcon={true}>State</TableSortLabel></TableCell>
        <TableCell><TableSortLabel id='email' onClick={props.onClick} hideSortIcon={true}>Email</TableSortLabel></TableCell>
      </TableRow>
    </TableHead>
  )
}