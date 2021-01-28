import React from 'react';
// import API from '../utils/API';
import TableWrapper from '../components/TableWrapper';
import users from '../db/randomUsers.json';
import HeaderSection from '../components/HeaderSection'
import Sort from '../utils/Sort.js'

let dataList = [];
let toggle = true;
class Directory extends React.Component {
  state = {
    data: []
  };

  componentDidMount () {
    const arr = [];
    users.results.forEach(item => {
      const {
        email,
        location: { city: currentCity, state: currentState },
        name: { first: fname, last: lname },
        picture: {
          thumbnail: pic
        }
      } = item;
      const key = email;
      arr.push({ key, pic, fname, lname, email, currentCity, currentState });
    })
    dataList = arr;
    this.setState({ data: arr });
  }
//
////////////////////////////////////////////////////////////////Write the rest of the sort functions
/****************************************************************************************** */
sortData = () => {
  if (toggle) {
    this.setState({ data: Sort.LnameAsc(dataList) });
    toggle = false;
  } else {
    this.setState({ data: Sort.FnameDsc(dataList) });
    toggle = true;
  }
}

// sortFnameAsc = () => {
//   dataList.sort(function(a,b) {
//     const alphaA = a.fname.toLowerCase();
//     const alphaB = b.fname.toLowerCase();
//     if (alphaA < alphaB) {
//       return -1;
//     }
//     if (alphaA > alphaB) {
//       return 1;
//     }
//     return 0;
//   })
//   this.setState({ data: dataList });
// }

// sortFnameDes = () => {
//   dataList.sort(function (a, b) {
//     const alphaA = a.fname.toLowerCase();
//     const alphaB = b.fname.toLowerCase();
//     if (alphaA < alphaB) {
//       return 1;
//     }
//     if (alphaA > alphaB) {
//       return -1;
//     }
//     return 0;
//   })
//   this.setState({ data: dataList });
// }

render() {
  return (
    <div>
      <HeaderSection />
      <TableWrapper onClick={this.sortData} {...[this.state]} />
    </div>
  );
}
}

export default Directory;
