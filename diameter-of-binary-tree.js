/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
let l = root.left;
l.left = new TreeNode(4);
l.right = new TreeNode(5);

var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  findLongestPath(root, 0);

  function findLongestPath(node, depth) {
    // End of the road, return maximum depth
    if (!node) return depth;

    // Longest paths down left and right children
    let left = findLongestPath(node.left, depth + 1);
    let right = findLongestPath(node.right, depth + 1);

    // Update diameter to longest path with this node as root
    diameter = Math.max(diameter, left + right - 2 * depth - 2);

    // Return the longest path down this node
    return Math.max(left, right);
  }
  return diameter;
};

console.log(diameterOfBinaryTree(root));
