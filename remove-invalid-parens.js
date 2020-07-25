var removeInvalidParentheses = function (s) {
  let output = new Array();
  removeHelper(s, output, 0, 0, "(", ")");
  return output;
};

function removeHelper(s, output, iStart, jStart, openParen, closedParen) {
  let numOpenParen = 0;
  let numClosedParen = 0;
  for (let i = iStart; i < s.length; i++) {
    if (s.charAt(i) == openParen) numOpenParen++;
    if (s.charAt(i) == closedParen) numClosedParen++;
    if (numClosedParen > numOpenParen) {
      // We have an extra closed paren we need to remove
      for (
        let j = jStart;
        j <= i;
        j++ // Try removing one at each position, skipping duplicates
      )
        if (
          s.charAt(j) == closedParen &&
          (j == jStart || s.charAt(j - 1) != closedParen)
        )
          // Recursion: iStart = i since we now have valid # closed parenthesis thru i. jStart = j prevents duplicates
          removeHelper(
            s.substring(0, j) + s.substring(j + 1, s.length),
            output,
            i,
            j,
            openParen,
            closedParen
          );
      return; // Stop here. The recursive calls handle the rest of the string.
    }
  }
  // No invalid closed parenthesis detected. Now check opposite direction, or reverse back to original direction.
  let reversed = s.split("").reverse().join("");
  if (openParen == "(") removeHelper(reversed, output, 0, 0, ")", "(");
  else output.push(reversed);
}

console.log(removeInvalidParentheses("(a)())()"));
