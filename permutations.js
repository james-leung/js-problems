var permutations = function (nums) {
  var results = [];

  function permute(arr, memo) {
    memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      let cur = arr.splice(i, 1);
      if (arr.length === 0) results.push(memo.concat(cur));
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  return permute(nums);
};

let perms = permutations(["1", "2", "3"]);
console.log(perms);
