import React from 'react';
// import TableRow from '../TableRow';


export default function TableBodySection (props) {
  return (
    <div>
      <p>Table Body Section</p>
      {console.log(typeof props)}
      {console.log(`Body=============${props}`)}
      {console.dir(props)}
      {/* {
        props[0].data.map(() => {
          return <p>Teeeeeest</p>
        })
      } */}

    </div>
  )
}