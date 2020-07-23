var findWords = function (board, words) {
  let output = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      for (let word of words) {
        if (board[i][j] === word[0] && findWord(word, i, j, 0)) {
          output.push(word);
          words = words.filter((w) => w !== word);
        }
      }
    }
  }
  return output;

  function findWord(word, i, j, n, path) {
    if (n === 0) path = [];
    if (n === word.length) return true;
    if (
      i < 0 ||
      j < 0 ||
      i >= board.length ||
      j >= board[0].length ||
      board[i][j] !== word[n]
    )
      return false;
    path.push([i, j]);
    board[i][j] = "-";
    let found =
      findWord(word, i + 1, j, n + 1, path) ||
      findWord(word, i, j - 1, n + 1, path) ||
      findWord(word, i - 1, j, n + 1, path) ||
      findWord(word, i, j + 1, n + 1, path);
    board[i][j] = word[n];
    return found;
  }
};

let board = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];
let words = ["oath", "pea", "eat", "rain"];

board = [
  ["a", "b"],
  ["c", "d"],
];
words = [
  "ab",
  "cb",
  "ad",
  "bd",
  "ac",
  "ca",
  "da",
  "bc",
  "db",
  "adcb",
  "dabc",
  "abb",
  "acb",
];

board = [
  ["a", "b", "c"],
  ["a", "e", "d"],
  ["a", "f", "g"],
];
words = ["abcdefg", "gfedcbaaa", "eaabcdgfa", "befa", "dgc", "ade"];
// words = ["gfedcbaaa", "abcdefg", "eaabcdgfa", "befa", "dgc", "ade"];
// words = ["gfedcbaaa"];
console.log(findWords(board, words));
