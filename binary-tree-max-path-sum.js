var maxPathSum = function (root) {
  let max = -Infinity;
  findBranch(root);
  return max;
  
  function findBranch(root) {
    if (root == null) return 0;

    // Assume root is the parent (there is only one parent),
    // then find the max path down the left and right 
    // branches (0 means not going down that branch at all)
    let left = Math.max(findBranch(root.left), 0);
    let right = Math.max(findBranch(root.right), 0);

    // If we choose this node as the parent, compare it with
    // max path so far
    max = Math.max(max, root.val + left + right);

    // If this is not the parent, then it is part of a branch;
    // return either left or right, whichever's greater;
    return root.val + Math.max(left, right);
  }
};

console.log(maxPathSum);
