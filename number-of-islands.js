var numIslands = function (grid) {
  let total = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        sweep(i, j);
        total++;
      }
    }
  }

  function sweep(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] !== 1
    )
      return;
    grid[i][j] = "X";
    sweep(i + 1, j);
    sweep(i, j - 1);
    sweep(i - 1, j);
    sweep(i, j + 1);
  }
  return total;
};

console.log(numIslands([["1", "0", "1", "0"]]));
