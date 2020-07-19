// var maxProfit = function (prices) {
//   function minMax(prices, maxProfit) {
//     if (prices.length <= 1) return maxProfit;
//     let min = Math.min(...prices);
//     let index = prices.indexOf(min);
//     let right = prices.splice(index + 1)
//     let max = Math.max(...right);
//     maxProfit = Math.max(max - min, maxProfit);
    
//     prices.pop();
//     return minMax(prices, maxProfit);
//   }
//   return minMax(prices, 0);
// };


var maxProfit = function (prices) {
  let maxCur = 0, maxSoFar = 0;
  for(let i = 1; i < prices.length; i++) {
      maxCur = Math.max(0, maxCur += prices[i] - prices[i-1]);
      maxSoFar = Math.max(maxCur, maxSoFar);
  }
  return maxSoFar;
}
console.log(maxProfit([2, 4, 1]));
