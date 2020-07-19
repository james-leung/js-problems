var isValidBST = function (root) {
  let valid = true;
   checkNodes(root);
  return valid;

  function checkNodes(node, min, max) {
    if (node) {
      if (node.left) {
        if (node.left.val >= node.val) valid = false;
        if (!isNaN(min) && node.left.val <= min) valid = false;
        checkNodes(node.left, min, node.left.val);
      }
      if (node.right) {
        if (node.right.val <= node.val) valid = false;
        if (!isNaN(max) && node.right.val >= max) valid = false;
        checkNodes(node.right, node.right.val, max);
      }
    }
    // return true;
  }
};

