var longestConsecutive = function (nums) {
  nums = new Set(nums);
  best = 0;
  for (let x of nums) {
    if (!nums.has(x - 1)) {
      let y = x + 1;
      while (nums.has(y)) y++;
      best = Math.max(best, y - x);
    }
  }
  return best;
};

console.log(longestConsecutive([200, 1, 100, 4, 3, 5, 2, 6]));
