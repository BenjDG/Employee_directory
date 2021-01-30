import { TableBody } from '@material-ui/core';
import React from 'react';
import MyTableRow from '../MyTableRow';

export default function MyTableBody ({searchResult}) {
  return (
      <TableBody>
      {
        searchResult.map((item) => {
          return <MyTableRow key={item.key} user={item} />
        })
      }
      </TableBody>
  )
}