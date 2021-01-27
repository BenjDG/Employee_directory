import React from 'react';
import TableBodySection from '../TableBodySection';
import TableHeader from '../TableHeader';


export default function TableWrapper (props) {
  return (<div>
    <p>Table Wrapper</p>
    <TableHeader />
    {console.log('Wrapper Type is: ' + typeof props)}
    {console.log(`Wrapper=============${props}`)}
{console.dir(props)}
    <TableBodySection {...props}/>
  </div>
  )
}