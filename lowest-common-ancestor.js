var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  return left === null ? right : right === null ? left : root;
};
// var lowestCommonAncestor = function (root, p, q) {
//   let path_of_p = [];
//   let path_of_q = [];
//   let path = [];

//   function inorder(node, p, q) {
//     path.push(0);
//     if (node.left) inorder(node.left, p, q);
//     path.pop(0)
//     if (node === p) path_of_p = path.slice();
//     if (node === q) path_of_q = path.slice();
//     path.push(1);
//     if (node.right) inorder(node.right, p, q);
//     path.pop(1);
//   }
//   if (root) inorder(root, p, q);

//   let i = 0;
//   let node = root;
//   while (
//     i < Math.min(path_of_p.length, path_of_q.length) &&
//     path_of_p[i] === path_of_q[i]
//   ) {
//     if (path_of_p[i] === 0) node = node.left;
//     else node = node.right;
//     i++;
//   }
//   return node;
// };

let a = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
