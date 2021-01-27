import React from 'react';
// import TableRow from '../TableRow';


export default function TableBodySection (props) {
  return (
    <div>
      <p>Table Body Section</p>
      {console.log(typeof props)}
      {console.log(`Body=============${props.data}`)}
      {console.dir(props[0].data)}
      {
        props[0].data.map(() => {
          return <p>Teeeeeest</p>
        })
      }

    </div>
  )
}