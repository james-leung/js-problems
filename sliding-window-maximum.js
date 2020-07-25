// var maxSlidingWindow = function (nums, k) {
//   let max = Math.max(...nums.slice(0, k));
//   let index = nums.indexOf(max);
//   let output = [max];

//   for (let i = 1; i <= nums.length - k; i++) {
//     if (index !== i - 1) {
//       if (nums[i + k - 1] > max) {
//         max = nums[i + k - 1];
//         index = i + k - 1;
//       }
//     } else {
//       max = Math.max(...nums.slice(i, i + k));
//       index = nums.indexOf(max, i);
//     }
//     output.push(max);
//   }
//   return output;
// };

var maxSlidingWindow = function (a, k) {
  if (a === null || k <= 0) return [];
  let n = a.length;
  let output = new Array(n - k + 1);
  let outputIndex = 0;
  // store index
  let q = [];
  for (let i = 0; i < a.length; i++) {
    // remove numbers out of range k
    while (q.length > 0 && q[0] < i - k + 1) q.shift();

    // remove smaller numbers in k range as they are useless
    while (q.length > 0 && a[q[q.length - 1]] < a[i]) q.pop();

    // q contains index... r contains content
    q.push(i);
    if (i >= k - 1) output[outputIndex++] = a[q[0]];
  }
  return output;
};

// var maxSlidingWindow = function (nums, k) {
//   let d = [];
//   let out = [];
//   for (let i = 0; i < nums.length; i++) {
//     let n = nums[i];
//     while (d.length > 0 && nums[d[d.length - 1]] < n) d.pop();
//     d.push(i);
//     if (d[0] === i - k) d.shift();
//     if (i >= k - 1) out.push(nums[d[0]]);
//   }
//   return out;
// };
