const jump = function (nums) {
  let maxPos = 0;
  let minStep = 0;
  let i = 0;
  while (i < nums.length) {
    if (maxPos >= nums.length - 1) {
      return minStep;
    }
    lastMaxPos = maxPos;
    while (i <= lastMaxPos) {
      maxPos = Math.max(maxPos, i + nums[i]);
      i++;
    }
    minStep++;
  }
  return minStep;
};

// var jump = function (nums) {
//   if (nums.length === 1) return 0;
//   let leastSteps = nums.length;
//   const nextJump = (nums, index, steps) => {
//     if (index + nums[index] >= nums.length - 1)
//       leastSteps = Math.min(steps + 1, leastSteps);
//     else {
//       let nextNums = nums
//         .slice(index + 1, index + nums[index] + 1)
//         .map((num, i) => num + i);
//       let max = Math.max(...nextNums);
//       let nextIndices = [];
//       nextNums.forEach((n, i) => {
//         if (n === max) nextIndices.push(i);
//       });
//       for (let i of nextIndices) {
//         nextJump(nums, index + i + 1, steps + 1);
//       }
//     }
//     return leastSteps;
//   };
//   return nextJump(nums, 0, 0);
// };

console.log(jump([1, 1]));
console.log(jump([2, 1]));
console.log(jump([1, 2]));
console.log(jump([1]));
console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 1, 1, 4, 2, 1, 3, 4, 2, 1, 3, 2, 1, 4]));
console.log(
  jump([
    5,
    6,
    4,
    4,
    6,
    9,
    4,
    4,
    7,
    4,
    4,
    8,
    2,
    6,
    8,
    1,
    5,
    9,
    6,
    5,
    2,
    7,
    9,
    7,
    9,
    6,
    9,
    4,
    1,
    6,
    8,
    8,
    4,
    4,
    2,
    0,
    3,
    8,
    5,
  ])
);
