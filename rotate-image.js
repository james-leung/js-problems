const rotate = function (matrix) {
  let len = matrix.length;
  if (matrix[0].length !== len) return null;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = i; j < len - i - 1; j++) {
      [
        matrix[i][j],
        matrix[j][len - i - 1],
        matrix[len - i - 1][len - j - 1],
        matrix[len - j - 1][i],
      ] = [
        matrix[len - j - 1][i],
        matrix[i][j],
        matrix[j][len - i - 1],
        matrix[len - i - 1][len - j - 1],
      ];
    }
  }
  return matrix;
};

const input = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

console.log(rotate(input));
