// Find all unique subsets of 3 numbers that sum to zero.
var threeSum = function (nums) {
  nums.sort((x, y) => x - y);

  let solSet = [];
  let L = nums.length;

  let start;
  let end;
  let newSum;

  // Idea: loop over sorted nums array with index i,
  // then let start and end be two numbers with indices > i.
  // Then we solve the standard 2-sum problem:
  // Increase start if sum is less than sum,
  // Decrease end if sum is greater than sum
  for (let i = 0; i < L - 2; i++) {
    start = i + 1;
    end = L - 1;
    while (start < end) {
      newSum = nums[start] + nums[i] + nums[end];
      if (newSum === 0) {
        solSet.push([nums[i], nums[start], nums[end]]);

        // start++;
        // Make sure we don't get duplicates
        let nums_Start = nums[start];
        let nums_End = nums[end];
        while (nums[start] === nums_Start) start++;
        while (nums[end] === nums_End) end--;
      } else if (newSum > 0) {
        end--;
      } else {
        start++;
      }
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return solSet;
};
