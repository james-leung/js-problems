var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let ans = 0;
  // Most recent appearance of characters
  let map = new Map();

  for (let j = 0, i = 0; j < n; j++) {
    // Conditionally update the left limit if the character repeats
    if (map.has(s.charAt(j))) {
      i = Math.max(map.get(s.charAt(j)), i);
    }
    // Update answer
    ans = Math.max(ans, j - i + 1);
    // Update the index of where the character last appeared
    map.set(s.charAt(j), j + 1);
  }
  return ans;
};
