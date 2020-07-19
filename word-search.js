function exist(board, word) {
  for (let i = 0; i < board.length; i++)
    for (let j = 0; j < board[0].length; j++) {
      if (findNextLetter(board, i, j, word, 0)) return true;
    }
  return false;
}

function findNextLetter(board, i, j, word, ind) {
  if (ind === word.length) return true;
  if (
    i > board.length - 1 ||
    i < 0 ||
    j < 0 ||
    j > board[0].length - 1 ||
    board[i][j] !== word.charAt(ind)
  )
    return false;
  board[i][j] = "*";
  let result =
    findNextLetter(board, i - 1, j, word, ind + 1) ||
    findNextLetter(board, i, j - 1, word, ind + 1) ||
    findNextLetter(board, i, j + 1, word, ind + 1) ||
    findNextLetter(board, i + 1, j, word, ind + 1);
  board[i][j] = word.charAt(ind);
  return result;
}

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCESCFSADEE";

console.log(exist(board, word));
