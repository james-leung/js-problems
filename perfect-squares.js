var numSquares = function (n) {
  // Memoize all perfect squares less than n
  let squareNums = [];
  // Memoize the least number of perfect squares for each number less than n
  let count = [0];

  // Dynamically keep track of the smallest perfect square greater than current number
  let nextSquare = 1;
  while (count.length < n + 1) {
    if (count.length === nextSquare) {
      // If current number is a perfect square, calculate the next perfect square
      squareNums.push(nextSquare);
      nextSquare = (squareNums.length + 1) ** 2;
      count.push(1);
    } else {
      // Otherwise, find all numbers that is one perfect square smaller than n.
      // Choose the one that is the sum of the least number of perfect squares
      count.push(
        Math.min(...squareNums.map((s) => count[count.length - s])) + 1
      );
    }
  }
  return count[n];
};

console.log(numSquares(12));
console.log(numSquares(18));
console.log(numSquares(99));
console.log(numSquares(999));
console.log(numSquares(123478));

// subtract(n, 0, []);

// function subtract(remainder, currentCount) {
//   if (currentCount >= lowestCount) return;
//   if (remainder === 0) {
//     lowestCount = Math.min(lowestCount, currentCount);
//     return;
//   }

//   // Index for largest square less than n;
//   let index = 0;
//   while (squareNums[index + 1] < remainder) {
//     index++;
//   }

//   for (let i = index; i >= 0; i--) {
//     let maxCount = Math.floor(remainder / squareNums[i]);
//     for (let j = 1; j <= maxCount; j++) {
//       subtract(remainder - j * squareNums[i], currentCount + j);
//     }
//   }
// }
