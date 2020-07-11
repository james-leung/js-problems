var search = function (groups, row, nums, target) {
  if (row < 0) return true;
  let v = nums[row--];
  for (let i = 0; i < groups.length; i++) {
    if (groups[i] + v <= target) {
      groups[i] += v;
      if (search(groups, row, nums, target)) return true;
      groups[i] -= v;
    }
    if (groups[i] === 0) break;
  }
  return false;
};

function canPartitionKSubsets(nums, k) {
  let sum = nums.reduce((x, y) => x + y, 0);
  if (sum % k > 0) return false;
  let target = sum / k;

  nums.sort((x, y) => x - y, 0);
  let row = nums.length - 1;
  if (nums[row] > target) return false;
  while (row >= 0 && nums[row] === target) {
    row--;
    k--;
  }
  return search(new Array(k).fill(0), row, nums, target);
}

a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let x = canPartitionKSubsets(a, 5);
console.log(x);
