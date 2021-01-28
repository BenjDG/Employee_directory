import { TableBody } from '@material-ui/core';
import React from 'react';
import MyTableRow from '../MyTableRow';

export default function MyTableBody (props) {
  return (
      <TableBody>
      {
        props[0].data.map((item) => {
          return <MyTableRow key={item.key} user={item} />
        })
      }
      </TableBody>
  )
}