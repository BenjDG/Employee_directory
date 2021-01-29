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

  hydrateData () {
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

  componentDidMount () {
    this.hydrateData();
  }
  // ###################################################### fix this search feature ###################

  handleInputChange = event => {
    const searchInput = event.target.value
    // set search state
    this.setState({ search: searchInput });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('submit clicked');


  }


  handleInputChange = event => {
    const searchInput = event.target.value
    // set search state
    this.setState({ search: searchInput });
    this.hydrateData();

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
        <HeaderSection handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
        <TableWrapper onClick={this.sortData} data={this.state.data} />
      </div>
    );
  }
}

export default Directory;
