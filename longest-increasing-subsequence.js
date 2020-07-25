// See https://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/

var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  let arrays = [[nums[0]]];

  for (let i = 1; i < nums.length; i++) {
    let lastArray = arrays[arrays.length - 1];
    if (nums[i] > lastArray[lastArray.length - 1])
      arrays.push(lastArray.concat(nums[i]));
    else if (nums[i] < arrays[0][0]) arrays[0][0] = nums[i];
    else {
      let tails = arrays.map((arr) => arr[arr.length - 1]);
      let index = binarySearch(tails, nums[i]);
      if (index - 1 >= 0 && nums[i] > arrays[index - 1][index - 1])
        arrays[index] = arrays[index - 1].concat(nums[i]);
    }
  }
  return arrays[arrays.length - 1].length;
};

function binarySearch(tails, num) {
  let left = 0;
  let right = tails.length - 1;
  while (right > left + 1) {
    let middle = Math.floor((left + right) / 2);
    if (num > tails[middle]) left = middle;
    else right = middle;
  }
  return right;
}
// Test the binary search function
// let arr = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let num = 5;
// let index = binarySearch(arr, num);
// arr.splice(index, 0, num);
// // console.log(arr);

console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]));
