import axios from 'axios';

const API = {
  GetRandomPerson: function () {
    return axios.get('https://randomuser.me/api/?inc=picture,name,location,email&results=5&nat=us&seed=gato');
  }
};
// export default {
//   getRandomDog: function () {
//     return axios.get('https://dog.ceo/api/breeds/image/random');
//   },
// }

export default API;
