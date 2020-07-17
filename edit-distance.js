// var minDistance = function (word1, word2) {
//   let dp = Array(word2.length + 1).fill(Array(word1.length + 1).fill());
//   for (let i = 0; i <= word2.length; i++) {
//     for (let j = 0; j <= word1.length; j++) {
//       if (i == 0 && j == 0) dp[i][j] = 0;
//       // no strings given
//       else if (i == 0 && j != 0) {
//         dp[i][j] = j; // word2 is empty
//       } else if (i != 0 && j == 0) {
//         dp[i][j] = i; // word1 is empty
//       } else if (word2.charAt(i - 1) != word1.charAt(j - 1)) {
//         dp[i][j] =
//           Math.min(dp[i][j - 1], Math.min(dp[i - 1][j], dp[i - 1][j - 1])) + 1;
//       } else {
//         dp[i][j] = dp[i - 1][j - 1]; // same characters just carry over previous chars from both
//       }
//     }
//   }
//   return dp[word2.length][word1.length];
// };

var minDistance = function (word1, word2) {
  let dp = Array(word1.length + 1)
    .fill(null)
    .map(() => Array(word2.length + 1).fill(0));

  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = i;
  }

  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, // left
        dp[i][j - 1] + 1, // right
        dp[i - 1][j - 1] + (word1[i - 1] != word2[j - 1] ? 1 : 0) // diagonal
      );
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};
