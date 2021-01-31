import axios from 'axios';

const API = {
  GetRandomPerson: function () {
    return axios.get('https://randomuser.me/api/?inc=picture,name,location,email&results=10&nat=us&seed=gato');
  }
};

export default API;
