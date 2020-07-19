var maximalRectangle = function (matrix) {
  let greatestArea = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === "1") sweep(i, j);
    }
  }
  return greatestArea;

  function sweep(i, j) {
    let n = j;
    while (n < matrix[0].length && matrix[i][n] === "1") {
      let m = sweepDown(i, n, j);
      greatestArea = Math.max(greatestArea, (m - i + 1) * (n - j + 1));
      n++;
    }
  }

  function sweepDown(i, n, j) {
    let m = i + 1;
    while (m < matrix.length) {
      let arr = matrix[m].slice(j, n + 1);
      if (!arr.every((x) => x === "1")) break;
      m++;
    }
    return m - 1;
  }
};

let rectangle = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

rectangle = [
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
];

// rectangle = [[]];
// rectangle = [['1', '0']];
// rectangle = [['1'], ['0']];
// rectangle = [['1'], ['0']];

console.log(maximalRectangle(rectangle));
