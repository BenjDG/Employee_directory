const Sort = {
  asc: function (arr, event) {
    const newArr = arr.map(function (element, i) {
      return { index: i, value: element[event] };
    });
    newArr.sort(function (a, b) {
      return +(a.value > b.value) || +(a.value === b.value) - 1;
    })
    const sortedArr = newArr.map(function (e) {
      return arr[e.index];
    });
    return sortedArr;
  },
  des: function (arr, event) {
    const newArr = arr.map(function (element, i) {
      return { index: i, value: element[event] };
    });
    newArr.sort(function (a, b) {
      return +(a.value < b.value) || +(a.value === b.value) - 1;
    })
    const sortedArr = newArr.map(function (e) {
      return arr[e.index];
    });
    return sortedArr;
  }
}

export default Sort;
