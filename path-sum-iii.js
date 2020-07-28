function pathSum(root, sum) {
  preSum = {};
  preSum[0] = 1;
  return helper(root, 0, sum, preSum);
}

function helper(root, currSum, target, preSum) {
  if (!root) return 0;

  currSum += root.val;
  let res = preSum[currSum - target] ?? 0;
  preSum[currSum] = (preSum[currSum] ?? 0) + 1;

  res +=
    helper(root.left, currSum, target, preSum) +
    helper(root.right, currSum, target, preSum);

  preSum[currSum]--;
  return res;
}

var pathSum = function (root, sum) {
  let count = 0;
  traverse(root, sum);
  return count;

  // Inorder traversal
  function traverse(root) {
    if (root) {
      traverse(root.left);
      continuousPath(root, sum);
      traverse(root.right);
    }
  }

  // Sum over root.val along every path
  // We've found a valid path when remainder is zero.
  function continuousPath(root, remainder) {
    if (!root) return;
    remainder -= root.val;
    if (remainder === 0) count++;

    continuousPath(root.left, remainder);
    continuousPath(root.right, remainder);
  }
};
