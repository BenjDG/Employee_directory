import axios from 'axios';

const API = {
  GetRandomPerson: function () {
    return axios.get('https://randomuser.me/api/');
  }
};
// export default {
//   getRandomDog: function () {
//     return axios.get('https://dog.ceo/api/breeds/image/random');
//   },
// }

export default API;
