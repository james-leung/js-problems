// Recursive
var kthSmallest = function (root, k) {
  let count = k;
  let number = 0;
  inorder(root);
  return number;

  function inorder(n) {
    if (n.left !== null) inorder(n.left);
    count--;
    if (count === 0) {
      number = n.val;
      return;
    }
    if (n.right !== null) inorder(n.right);
  }
};

// Iterative
var kthSmallest = function (root, k) {
  let st = new Stack();

  while (root != null) {
    st.push(root);
    root = root.left;
  }

  while (k !== 0) {
    let n = st.pop();
    k--;
    if (k === 0) return n.val;
    let right = n.right;
    while (right) {
      st.push(right);
      right = right.left;
    }
  }
  return -1; // never hit if k is valid
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
