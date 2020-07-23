// Find whether graph is acyclic
var canFinish = function (numCourses, prerequisites) {
  let graph = new Array(numCourses).fill([]);
  let visit = new Array(numCourses).fill(0);

  // create graph
  for (let p of prerequisites) graph[p[0]].push(p[1]);
  // visit each node
  for (let i = 0; i < numCourses; i++) if (!dfs(i)) return false;
  return true;

  function dfs(i) {
    // if ith node is marked as being visited, then a cycle is found
    if (visit[i] === -1) return false;
    // if it is done visted, then do not visit again
    if (visit[i] === 1) return true;
    // mark as being visited
    visit[i] = -1;
    // visit all the neighbours
    for (let j of graph[i]) if (!dfs(j)) return false;
    // after visit all the neighbours, mark it as done visited
    visit[i] = 1;
    return true;
  };
};
