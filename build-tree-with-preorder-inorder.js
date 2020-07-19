function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var buildTree = function (preorder, inorder) {
  if (preorder.length < 1) return null;
  let root = new TreeNode();
  build(root, preorder, inorder);
  return root;

  function build(node, preorder, inorder) {
    node.val = preorder[0];
    let split = inorder.indexOf(node.val);

    if (split > 0) {
      node.left = new TreeNode();
      build(node.left, preorder.slice(1, split + 1), inorder.slice(0, split));
    }
    if (split < preorder.length - 1) {
      node.right = new TreeNode();
      build(node.right, preorder.slice(split + 1), inorder.slice(split + 1));
    }
  }
};
