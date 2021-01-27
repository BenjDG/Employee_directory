import React from 'react';
import TableBodySection from '../TableBodySection';
import TableHeader from '../TableHeader';


export default function TableWrapper (props) {
  return (<div>
    <p>Table Wrapper</p>
    <TableHeader />
    {console.log(typeof props)}
      {console.log(`Wrapper=============${props}`)}
    <TableBodySection {...props}/>
  </div>
  )
}