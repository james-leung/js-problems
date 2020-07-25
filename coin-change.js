var coinChange = function (coins, amount) {
  let minArray = [0];
  for (let i = 1; i <= amount; i++) {
    // Find minimum number of coins needed to make up (amount - a coin)
    let minPrevious = coins
      .filter((c) => c <= i) // Can't use coins worth more than amount
      .map((c) => minArray[i - c]) // Find minimum coins needed for smaller amounts
      .filter((min) => min > -1); // Filter out those than can't be made up with given coins

    if (minPrevious.length === 0) minArray.push(-1);
    else minArray.push(Math.min(...minPrevious) + 1);
  }
  return minArray[amount];
};

console.log(coinChange([3, 5], 112));
