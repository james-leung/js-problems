function rob(root) {
  let res = robSub(root);
  return Math.max(res[0], res[1]);
}

function robSub(root) {
  if (root === null) return new Array(2).fill(0);
  
  let left = robSub(root.left);
  let right = robSub(root.right);
  let res = new Array(2).fill(0);

  // Not robbing the house
  res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  // Robbing the house
  res[1] = root.val + left[0] + right[0];
  
  return res;
}