var numTrees = function (n) {
  let trees = [1, 1, 2, 5];

  while (trees.length <= n) {
    count = 0;
    for (let i = 0; i < trees.length; i++)
      count += trees[i] * trees[trees.length - i - 1];
    trees.push(count);
  }
  return trees[n];
};

console.log(numTrees(1));
console.log(numTrees(2));
console.log(numTrees(3));
console.log(numTrees(4));
console.log(numTrees(5));
console.log(numTrees(6));
console.log(numTrees(19));
