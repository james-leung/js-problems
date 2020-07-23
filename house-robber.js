// Recursive solution
// var rob = function(nums) {
//   return rob(nums, nums.length - 1);
// }
// function rob(nums = i) {
//   if (i < 0) return 0;
//   return Math.max(rob(nums, i - 2) + nums[i], rob(nums, i - 1));
// }

// Iterative solution (O(n) time, O(1) space)
var rob = function (nums) {
  if (nums.length == 0) return 0;
  let prev1 = 0;
  let prev2 = 0;
  for (let num of nums) {
    let tmp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = tmp;
  }
  return prev1;
};
