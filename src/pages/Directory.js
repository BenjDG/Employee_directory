import React from 'react';
// import API from '../utils/API';
import TableWrapper from '../components/TableWrapper';
import users from '../db/randomUsers.json';

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
      arr.push({key, pic, fname, lname, email, currentCity, currentState });
    })
    this.setState({ data: arr })
  }

  render () {
    return (
      <div>
        {console.log("Directory type is: " + typeof this.state.data)}
          <TableWrapper {...[this.state.data]}/>
      </div>
    );
  }
}

export default Directory;
