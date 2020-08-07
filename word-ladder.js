function ladderLength(beginWord, endWord, wordList) {
  set = {};
  q = [];
  q.push(beginWord);
  let step = 1;
  while (q.length > 0) {
    let size = q.length;
    for (let j = 0; j < size; j++) {
      let cur = q.pop();
      for (let i = 0; i < endWord.length(); i++) {
        for (let letter = "a"; letter <= "z"; letter++) {
          let newWord = cur;
          newWord[i] = letter;
          if (set[newWord]) {
            if (newWord === endWord) return step + 1;
            set[newWord] = null;
            q.push(newWord);
          }
        }
      }
    }
    step++;
  }
  return 0;
}
