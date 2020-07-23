// Find whether graph is acyclic
var canFinish = function (root) {
  let queue = [root];
  bfs();

  function bfs() {
    if (queue.length > 0) {
      let node = queue.shift();
      console.log(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      bfs();
    }
  }
};

//  Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let a = new TreeNode(3);
a.left = new TreeNode(4);
a.right = new TreeNode(5);

let left = a.left;
let right = a.right;

left.left = new TreeNode(7);
left.right = new TreeNode(8);
right.left = new TreeNode(9);
right.right = new TreeNode(0);

console.log(canFinish(a));
