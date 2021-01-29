import React from 'react';
// import API from '../utils/API';
import TableWrapper from '../components/TableWrapper';
import users from '../db/randomUsers.json';
import HeaderSection from '../components/HeaderSection'
import Sort from '../utils/Sort.js'

let dataList = [];
let toggleFname = true;

class Directory extends React.Component {
  state = {
    search: "",
    data: [],
    error: ""
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
// ###################################################### fix this search feature ###################
  handleInputChange = event => {
    const searchInput = event.target.value
    // set search state
    this.setState({ search: searchInput });

    // filter each item in array
    const result = this.state.data.filter((item) => {
      let check = false;
      // loop each object value
      for (const str in item) {

        // don't check these object keys
        if (str !== 'pic' || str !== 'key') {

          // if search string found return true
          if (item[str].indexOf(searchInput) !== -1) {
            console.log('found');
            check = true;
          } else { check = false; }
        } else { check = false; }
      }
      return check;
      // return Object.values(item).indexOf(searchInput) > -1;
    });
    this.setState({ data: result });
  };

  sortData = (event) => {
    if (toggleFname) {
      this.setState({ data: Sort.asc(dataList, event.target.id) });
      toggleFname = false;
    } else {
      this.setState({ data: Sort.des(dataList, event.target.id) });
      toggleFname = true;
    }
  }
  render () {
    return (
      <div>
        <HeaderSection handleInputChange={this.handleInputChange} />
        <TableWrapper onClick={this.sortData} data={this.state.data} />
      </div>
    );
  }
}

export default Directory;
