import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import API from '../utils/API';
import HeaderSection from '../components/HeaderSection';
import TableSection from '../components/TableSection';

class Directory extends Component {
  componentDidMount () {
    API.GetRandomPerson()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <Container>
          <HeaderSection />
          <TableSection />
        </Container>
      </div>
    );
  }
}

export default Directory;
