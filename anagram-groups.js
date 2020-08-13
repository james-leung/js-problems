var groupAnagrams = function (strs) {
  let groups = [];
  // List of distinct, alphabetically sorted strings
  let sortedStrings = [];
  strs.forEach((curr) => {
    // Sort the string and see if it is in the list already
    let sortedString = curr.split("").sort().join("");
    let ind = sortedStrings.indexOf(sortedString);
    if (ind < 0) {
      sortedStrings.push(sortedString);
      groups.push([curr]);
    } else groups[ind].push(curr);
  });
  return groups;
};

console.log(groupAnagrams(["", "a"]));
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
