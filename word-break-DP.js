const wordBreak = (s, wordDict) => {
  let ok = [true];
  for (let i = 1; i <= s.length; i++) {
    let start = [];
    for (let j = 0; j < i; j++) {
      start.push(ok[j] && wordDict.indexOf(s.slice(j, i)) > -1);
    }
    ok.push(start.some((x) => x));
  }
  return ok[ok.length - 1];
};

// var wordBreak = function (s, wordDict) {
//   let flag = false;
//   wordDict.sort((x, y) => x.length - y.length);

//   if (wordDict.length > 1) shortenDict(wordDict);

//   function shortenDict(wordDict) {
//     let maxLength = wordDict[wordDict.length - 1].length;
//     let minLength = wordDict[0].length;

//     for (let i = minLength; i <= maxLength; i++) {
//       let words = wordDict.filter((w) => w.length === i);
//       let shorterWords = wordDict.filter((w) => w.length < i);

//       for (let w of words) {
//         lookUp(w, shorterWords);
//         if (flag) {
//           wordDict.splice(wordDict.indexOf(w), 1);
//         }
//         flag = false;
//       }
//     }
//   }

//   function lookUp(s, wordDict) {
//     if (s.length === 0) flag = true;

//     let i = 0;
//     while (!flag && i < wordDict.length) {
//       let w = wordDict[i];
//       let check = s.slice(0, w.length) === w;
//       if (check && w.length > 0) lookUp(s.slice(w.length), wordDict);
//       i++;
//     }
//   }
//   console.log(wordDict);
//   lookUp(s, wordDict);
//   return flag;
// };

// s =
//   "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
// wordDict = [
//   "a",
//   "aa",
//   "aaa",
//   "aaaa",
//   "aaaaa",
//   "aaaaaa",
//   "aaaaaaa",
//   "aaaaaaaa",
//   "aaaaaaaaa",
//   "aaaaaaaaaa",
// ];

(s = "leetcode"), (wordDict = ["leet", "code"]);

// (s = "applepenapple"), (wordDict = ["apple", "pen"]);

// s = "catsandog";
// wordDict = ["cats", "dog", "sand", "and", "cat"];

// s = "bccdbacdbdacddabbaaaadababadad";
// wordDict = [
//   "cbc",
//   "bcda",
//   "adb",
//   "ddca",
//   "bad",
//   "bbb",
//   "dad",
//   "dac",
//   "ba",
//   "aa",
//   "bd",
//   "abab",
//   "bb",
//   "dbda",
//   "cb",
//   "caccc",
//   "d",
//   "dd",
//   "aadb",
//   "cc",
//   "b",
//   "bcc",
//   "bcd",
//   "cd",
//   "cbca",
//   "bbd",
//   "ddd",
//   "dabb",
//   "ab",
//   "acd",
//   "a",
//   "bbcc",
//   "cdcbd",
//   "cada",
//   "dbca",
//   "ac",
//   "abacd",
//   "cba",
//   "cdb",
//   "dbac",
//   "aada",
//   "cdcda",
//   "cdc",
//   "dbc",
//   "dbcb",
//   "bdb",
//   "ddbdd",
//   "cadaa",
//   "ddbc",
//   "babb",
// ];

// s =
//   "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
// wordDict = [
//   "aa",
//   "aaa",
//   "aaaa",
//   "aaaaa",
//   "aaaaaa",
//   "aaaaaaa",
//   "aaaaaaaa",
//   "aaaaaaaaa",
//   "aaaaaaaaaa",
//   "ba",
// ];
console.log(wordBreak(s, wordDict));
// console.log(s.split("ba"));
// console.log(s.split("aaa"));
// console.log(s.split("baabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
