import React from 'react';


export default function TableRow (props) {
  return (<div>
    <tr>
      <td>{props.user.pic}</td>
      <td>{props.user.fname}</td>
      <td>{props.user.lname}</td>
      <td>{props.user.currentCity}</td>
      <td>{props.user.currentState}</td>
      <td>{props.user.email}</td>
    </tr>
  </div>
  )
}