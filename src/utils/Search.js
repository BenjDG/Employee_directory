const Search = function (personArray, toSearch) {
  const results = [];
  const toSearchLower = toSearch.toLowerCase().trim();
  console.log(`toSearchLower >> ${toSearchLower}`);
  for (let i = 0; i < personArray.length; i++) {
    for (let key in personArray[i]) {
      if (personArray[i][key].indexOf(toSearchLower) !== -1) {
        console.log(`array[i][key] >> ${personArray[i][key]}`);
        results.push(personArray[i]);
      }
    }
  }
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  const uniqueResults = results.filter(unique)
  return uniqueResults;
}
export default Search;