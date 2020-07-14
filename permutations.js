var permute = function (nums) {
  let results = [];

  const permuteNums = (arr, nums) => {
    if (arr.length === nums.length) results.push(arr);
    for (let n of nums.filter((x) => arr.indexOf(x) < 0)) 
      permuteNums(arr.concat(n), nums);
    return results;
  };
  return permuteNums([], nums);
};

let perms = permute([0, 1, 2, 3]);
console.log(perms);
