import React from 'react';
import TableBodySection from '../TableBodySection';
import TableHeader from '../TableHeader';


export default function TableWrapper (props) {
  return (<div>
    <p>Table Wrapper</p>
    <TableHeader gato={props.cat}/>
    <TableBodySection gatogato={props.cat}/>
  </div>
  )
}