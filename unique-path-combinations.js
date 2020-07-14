var uniquePaths = function (m, n) {
  let n1 = Math.max(m, n) - 1;
  let n2 = Math.min(m, n) - 1;

  let output = 1;
  for (let i = n1 + 1; i <= n1 + n2; i++) {
    output *= i / (i - n1);
  }
  return Math.round(output);
};
