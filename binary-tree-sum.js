const sumRootToLeaf = function (root) {
  let total = 0;
  const traverseTree = (node, count) => {
    if (count === undefined) count = [];
    count.push(node.val);
    if (node.left) traverseTree(node.left, count.slice());
    if (node.right) traverseTree(node.right, count.slice());
    if (!node.left && !node.right)
      total += count.reduce(
        (x, y, i) => x + y * 2 ** (count.length - i - 1),
        0
      );
    return total;
  };
  return traverseTree(root);
};

// Input: [1,0,1,0,1,0,1]
// Output: 22
