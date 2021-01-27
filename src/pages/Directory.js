import { Container } from '@material-ui/core';
import React from 'react';
// import API from '../utils/API';
import TableWrapper from '../components/TableWrapper';
import users from '../db/randomUsers.json';

// const cat = 'fluffy';

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
      arr.push({ pic, fname, lname, email, currentCity, currentState });
    })
    this.setState({ data: arr })
  }


  render () {
    return (
      <div>
        <Container>
          <TableWrapper />
        </Container>
      </div>
    );
  }
}

export default Directory;
