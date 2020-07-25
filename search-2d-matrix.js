// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

var searchMatrix = function (matrix, target) {
  if (matrix === null || matrix.length < 1 || matrix[0].length < 1) {
    return false;
  }
  let col = matrix[0].length - 1;
  let row = 0;
  while (col >= 0 && row <= matrix.length - 1) {
    if (target === matrix[row][col]) {
      return true;
    } else if (target < matrix[row][col]) {
      col--;
    } else if (target > matrix[row][col]) {
      row++;
    }
  }
  return false;
};
