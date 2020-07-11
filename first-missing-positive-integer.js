var firstMissingPositive = function (nums) {
  nums.sort((x, y) => x - y);
  nums = nums.filter((x) => x > 0);
  nums = nums.filter((x, i) => x !== nums[i + 1]);
  if (nums.length === 0) return 1;
  index = 0;
  for (let i = 1; i < nums[nums.length - 1]; i++) {
    if (i !== nums[index]) return i;
    else index++;
  }
  return nums[nums.length - 1] + 1;
};

console.log(firstMissingPositive([1, 2, 3, 4, 5]));
console.log(firstMissingPositive([1, 2, 3, 5]));
console.log(firstMissingPositive([1]));
console.log(firstMissingPositive([]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
console.log(firstMissingPositive([1, 2, 2, 1, 3, 1, 0, 4, 0]));
