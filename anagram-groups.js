var groupAnagrams = function (strs) {
  let groups = [];
  let sortedStrings = [];
  strs.forEach((curr) => {
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
