var longestValidParentheses = function (s) {
  let maxLength = 0;

  for (let i = 0; i <= s.length - 2; i++) {
    let opens = 0;
    let j = 0;
    while (opens >= 0 && i + j + 2 <= s.length) {
      let ss = s.slice(i + j, i + j + 2);
      if (ss == "((") opens += 2;
      if (ss == "))") opens -= 2;
      if (ss == ")(" && opens === 0) break;
      j += 2;
      if (opens === 0 && j > maxLength) maxLength = j;
    }
  }
  return maxLength;
};

console.log(longestValidParentheses(""));
console.log(longestValidParentheses(")()())()()("));
console.log(longestValidParentheses("("));
console.log(longestValidParentheses("())"));
console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses("()"));
console.log(longestValidParentheses("()()"));
console.log(longestValidParentheses("(())"));
console.log(longestValidParentheses("((((()))))"));
console.log(longestValidParentheses("((((())((((()))))))"));
console.log(longestValidParentheses("((((("));
console.log(longestValidParentheses("(((((()"));

console.log(longestValidParentheses("((((((((((((((((((((((((((((()))"));
