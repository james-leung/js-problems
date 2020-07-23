var maxProduct = function (nums) {
  let r = nums[0];
  let n = nums.length;

  for (let i = 1, imax = r, imin = r; i < n; i++) {
      if (nums[i] < 0)
          [imax, imin] = [imin, imax];
      imax = Math.max(nums[i], imax * nums[i]);
      imin = Math.min(nums[i], imin * nums[i]);
      r = Math.max(r, imax);
  }
  return r;
}


// var maxProduct = function (nums) {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];

//   let startingIndices = [];
//   let nonZeroNums = [[]];
//   if (nums[0] !== 0) {
//     startingIndices.push(0);
//   } else {
//     nonZeroNums.pop();
//   }

//   nums.forEach((x, i) => {
//     if (x !== 0) nonZeroNums[nonZeroNums.length - 1].push(x);
//     else if (i + 1 < nums.length && nums[i + 1] !== 0) {
//       nonZeroNums.push([]);
//       startingIndices.push(i + 1);
//     }
//   });

//   let products = nonZeroNums.map((arr) => findMaxProduct(arr));
//   let maxProduct = Math.max(...products.map((p) => p[0]));
//   let posOfMax = products.map((p) => p[0]).indexOf(maxProduct);
//   let startingIndex = startingIndices[posOfMax];
//   let subArrayIndices = products[posOfMax][1].map((x) => x + startingIndex);

//   // return nums.slice(...subArrayIndices);
//   console.log(nonZeroNums);
//   return Math.max(0, products[posOfMax][0]);

//   function findMaxProduct(arr) {
//     console.log(arr);
//     if (arr.length === 1) return [arr[0], [0, arr.length]];
//     let product = arr.reduce((x, y) => x * y, 1);
//     if (product > 0) return [product, [0, arr.length]];
//     let negatives = [];
//     arr.forEach((x, i) => {
//       if (x < 0) negatives.push(i);
//     });
//     let leftNegative = negatives[0];
//     let rightNegative = negatives[negatives.length - 1];
//     let leftProduct = arr.slice(0, rightNegative).reduce((x, y) => x * y, 1);
//     let rightProduct = arr.slice(leftNegative + 1).reduce((x, y) => x * y, 1);

//     if (leftProduct > rightProduct) return [leftProduct, [0, rightNegative]];
//     else return [rightProduct, [leftNegative + 1, arr.length]];
//   }
// };

console.log(maxProduct([3, -1, 4, 0, 2, 5, 0, 3, -3, 2, 3, -1, 2, 1, -2, 1]));
console.log(maxProduct([3, -1, 4, 2]));
console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-1, 0]));
console.log(maxProduct([0, -2, 0]));
