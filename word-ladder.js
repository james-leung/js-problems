function ladderLength(beginWord, endWord, wordList) {
<<<<<<< HEAD
  set = {};
  q = [];
  q.push(beginWord);
=======
  set = new Set(wordList);
  q = [beginWord];
>>>>>>> f3d12272d80e29d9e51d3a5ab07dd7540d52a9ad
  let step = 1;

  while (q.length > 0) {
    let size = q.length;
    // Loop over the queue of words
    for (let j = 0; j < size; j++) {
<<<<<<< HEAD
      let cur = q.pop();
      for (let i = 0; i < endWord.length(); i++) {
        for (let letter = "a"; letter <= "z"; letter++) {
          let newWord = cur;
          newWord[i] = letter;
          if (set[newWord]) {
            if (newWord === endWord) return step + 1;
            set[newWord] = null;
=======
      let cur = q.shift();
      // Loop over every position of string and every alphabet
      for (let i = 0; i < endWord.length; i++) {
        for (
          let letter = "a";
          letter <= "z";
          letter = String.fromCharCode(letter.charCodeAt(0) + 1)
        ) {d
          let newWord = cur;
          // Replace letter in word
          newWord = newWord.substring(0,i) + letter + newWord.substring(i+1);
          // Check to see if the new word is in word list
          if (set.has(newWord)) {
            if (newWord === endWord) return step + 1;
            // If it is, take it off the set and add it to the queue
            set.delete(newWord);
>>>>>>> f3d12272d80e29d9e51d3a5ab07dd7540d52a9ad
            q.push(newWord);
          }
        }
      }
    }
    // Once we have gone over all combinations, increment the number of steps
    step++;
  }
  return 0;
}
<<<<<<< HEAD
=======

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(ladderLength(beginWord, endWord, wordList));
>>>>>>> f3d12272d80e29d9e51d3a5ab07dd7540d52a9ad
