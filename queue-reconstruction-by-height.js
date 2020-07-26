function reconstructQueue(people) {
  people.sort((x, y) => {
    if (x[0] === y[0]) return x[1] - y[1];
    return y[0] - x[0];
  });
  let res = [];
  for (let i = 0; i < people.length; i++) 
    res.splice(people[i][1], 0, people[i]);
  return res;
}

// var reconstructQueue = function (people) {
//   let queue = [];
//   let hkDict = {};

//   // Get map between h and k
//   for (let p of people) {
//     if (!hkDict[p[0]]) {
//       hkDict[p[0]] = [p[1]];
//     } else hkDict[p[0]].push(p[1]);
//   }

//   // Sort the queue from shortest to tallest
//   for (let h in hkDict) {
//     h = parseInt(h);
//     for (let i = 0; i < hkDict[h].length; i++) queue.push([h, i]);
//   }

//   // Get the h's and k's of the people
//   let hArray = Object.keys(hkDict)
//     .map((h) => parseInt(h))
//     .sort((x, y) => x - y);

//   let kArray = hArray
//     .map((h) => hkDict[h].sort((x, y) => x - y))
//     .reduce((x, y) => x.concat(y), []);

//   // Reorder queue by moving person to the right,
//   // starting from the tallest person.
//   // k is increased by every step to the right
//   for (let i = queue.length - 1; i >= 0; i--) {
//     let target_k = kArray[i];
//     let [h, k] = queue.splice(i, 1)[0];
//     queue.splice(i + target_k - k, 0, [h, target_k]);
//   }
//   return queue;
// };

console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
);
