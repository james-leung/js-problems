function ladderLength(beginWord, endWord, wordList) {
  set = new Set(wordList);
  q = [beginWord];
  let step = 1;
  while (q.length > 0) {
    let size = q.length;
    for (let j = 0; j < size; j++) {
      let cur = q.shift();
      for (let i = 0; i < endWord.length; i++) {
        for (
          let letter = "a";
          letter <= "z";
          letter = String.fromCharCode(letter.charCodeAt(0) + 1)
        ) {
          let newWord = cur;
          newWord = newWord.substring(0,i) + letter + newWord.substring(i+1);
          if (set.has(newWord)) {
            if (newWord === endWord) return step + 1;
            set.delete(newWord);
            q.push(newWord);
          }
        }
      }
    }
    step++;
  }
  return 0;
}

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(ladderLength(beginWord, endWord, wordList));
