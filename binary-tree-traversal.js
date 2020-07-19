// Recursive
var inorderTraversal = function (root) {
  let output = [];

  function traverse(node) {
    if (node) {
      traverse(node.left);
      output.push(node.val);
      traverse(node.right);
    }
  }
  traverse(root);
  return output;
};

// Iterative
inorderTraversal = function (node) {
  let output = [];
  let nodes = [];
  while (node || nodes.length > 0) {
    while (node) {
      nodes.push(node);
      node = node.left;
    }
    if (nodes.length > 0) {
      node = nodes[nodes.length - 1];
      nodes.pop();
      output.push(node.val);
      node = node.right;
    }
  }
  return output;
};
