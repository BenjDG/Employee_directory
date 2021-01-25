import React, { Component } from 'react';
import API from '../../utils/API.js';

class List extends Component {
  componentDidMount () {
    API.GetRandomPerson()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <p>data</p>
      </div>
    );
  }
}

export default List;
