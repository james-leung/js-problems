var exist = function (board, word) {
  let c = word[0];
  let coords = [];
  let paths = [];
  for (let i = 0; i < board.length; i++) {
    let j = board[i].indexOf(c);
    if (j > -1) coords.push([i, j]);
  }

  const findNextLetter = (coord, path, n) => {
    let [i, j] = coord;
    path.push(coord);
    if (path.length === word.length) paths.push(path);

    n++;

    if (
      j + 1 < board[0].length &&
      board[i][j + 1] === word[n] &&
      checkNoRepeat([i, j + 1], path)
    ) {
      findNextLetter([i, j + 1], path.slice(), n);
    }
    if (
      i + 1 < board.length &&
      board[i + 1][j] === word[n] &&
      checkNoRepeat([i + 1, j], path)
    ) {
      findNextLetter([i + 1, j], path.slice(), n);
    }
    if (
      j - 1 >= 0 &&
      board[i][j - 1] === word[n] &&
      checkNoRepeat([i, j - 1], path)
    ) {
      findNextLetter([i, j - 1], path.slice(), n);
    }
    if (
      i - 1 >= 0 &&
      board[i - 1][j] === word[n] &&
      checkNoRepeat([i - 1, j], path)
    ) {
      findNextLetter([i - 1, j], path.slice(), n);
    }
  };

  const checkNoRepeat = (coord, path) => {
    return !path.find((x) => x[0] === coord[0] && x[1] === coord[1]);
  };

  for (let coord of coords) {
    findNextLetter(coord, [], 0);
  }

  return paths.length > 0;
};
