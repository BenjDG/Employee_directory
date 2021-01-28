import { TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react';


export default function MyTableHeader () {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Picture</TableCell>
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>City</TableCell>
        <TableCell>State</TableCell>
        <TableCell>Email</TableCell>
      </TableRow>
    </TableHead>
  )
}