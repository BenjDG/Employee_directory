import React from 'react';
// import API from '../utils/API';
import TableWrapper from '../components/TableWrapper';
import users from '../db/randomUsers.json';
import HeaderSection from '../components/HeaderSection'

let dataList = [];
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
    this.setState({ data: arr })
  }

  sortFnameAsc = () => {
    dataList.sort(function(a,b) {
      const alphaA = a.fname.toLowerCase();
      const alphaB = b.fname.toLowerCase();
      if (alphaA < alphaB) {
        return -1;
      }
      if (alphaA > alphaB) {
        return 1;
      }
      return 0;
    })
    this.setState({ data: dataList });
  }

  sortFnameDes = () => {
    dataList.sort(function(a,b) {
      const alphaA = a.fname.toLowerCase();
      const alphaB = b.fname.toLowerCase();
      if (alphaA < alphaB) {
        return 1;
      }
      if (alphaA > alphaB) {
        return -1;
      }
      return 0;
    })
    this.setState({ data: dataList });
  }



  render () {
    return (
      <div>
        <button onClick={this.sortFnameAsc}>Click Asc</button>
        <button onClick={this.sortFnameDes}>Click Des</button>
        <HeaderSection />
        <TableWrapper {...[this.state]} />
      </div>
    );
  }
}

export default Directory;
