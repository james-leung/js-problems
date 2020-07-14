var canJump = function (nums) {
  let numJumps = 0;
  let canJumpBool = false;

  const jump = (index, nums) => {
    if (index === nums.length - 1) return (canJumpBool = true);
    else if (nums[index] === 0) return (canJumpBool = false);

    numJumps++;
    canJumpBool = true;
    if (index + nums[index] >= nums.length - 1) return (canJumpBool = true);

    let arr = nums
      .slice(index + 1, index + nums[index] + 1)
      .map((x, j) => x + j);

    let newIndex = arr.indexOf(Math.max(...arr)) + index + 1;
    jump(newIndex, nums);
  };
  jump(0, nums);
  return canJumpBool;
};

console.log(canJump([2, 3, 1, 1, 4]));
