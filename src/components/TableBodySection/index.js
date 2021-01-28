import React from 'react';
import TableRow from '../TableRow';

export default function TableBodySection (props) {
  return (
    <div>
      {/* {console.log(typeof props[0].data)} */}
      {console.dir(props[0].data)}
      {
        props[0].data.map((item) => {
          console.log(item);
          return <TableRow key={item.key} user={item} />
        })
      }
    </div>
  )
}