
const Sort = {
  LnameAsc: function(arr) {
    arr.sort(function(a,b) {
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
    return arr;
  },
  
  FnameDsc: function(arr) {
    arr.sort(function (a, b) {
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
    return arr;
  }
}

export default Sort;