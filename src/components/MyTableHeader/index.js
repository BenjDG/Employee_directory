import { TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';
import React from 'react';


export default function MyTableHeader (props) {
  return (
    <TableHead>
      <TableRow>
        <TableCell id='pic'>Picture</TableCell>
        <TableCell id='fname'><TableSortLabel onClick={props.onClick} hideSortIcon={true}>First Name</TableSortLabel></TableCell>
        <TableCell id='lname'><TableSortLabel>Last Name</TableSortLabel></TableCell>
        <TableCell id='city'><TableSortLabel>City</TableSortLabel></TableCell>
        <TableCell id='state'><TableSortLabel>State</TableSortLabel></TableCell>
        <TableCell id='email'><TableSortLabel>Email</TableSortLabel></TableCell>
      </TableRow>
    </TableHead>
  )
}