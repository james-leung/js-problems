var findTargetSumWays = function (nums, S) {
  // First find the sum of all given numbers (all positive signs)
  let sum = nums.reduce((x, y) => x + y, 0);

  // S must not be greater than sum. Also, if sum is even (odd),
  // then S must also be even (odd)
  if (S > sum || sum % 2 !== S % 2) return 0;

  // Choose a susbet of numbers to have a negative sign. They
  // must sum to the following value
  sum = (sum - S) / 2;

  // Store number of ways to sum to any number between 0 and num
  let arr = new Array(sum + 1).fill(0);
  // We can always start from zero
  arr[0] = 1;

  // Add more and more numbers to the subset of numbers
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    // Consider a new number n from nums. The number of ways
    // we can sum to j is now the number of ways we can sum
    // to j - n (using n) plus that of j (not using n)
    // Careful: should go from greatest to smallest in order 
    // not to add multiple times
    for (let j = sum - n; j >= 0; j--) {
      arr[n + j] += arr[j];
    }
  }
  return arr[sum];
};
