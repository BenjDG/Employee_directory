import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import TablePic from '../TablePic';

export default function MyTableRow (props) {
  return (
    <TableRow key={props.email}>
      <TableCell><TablePic pic={props.user.pic} /></TableCell>
      <TableCell>{props.user.fname}</TableCell>
      <TableCell>{props.user.lname}</TableCell>
      <TableCell>{props.user.currentCity}</TableCell>
      <TableCell>{props.user.currentState}</TableCell>
      <TableCell>{props.user.email}</TableCell>
    </TableRow>
  )
}