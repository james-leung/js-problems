const mergeSort = (a) => {
  let n = a.length;
  if (n <= 1) return a;

  let arr1 = a.slice(0, Math.floor(n / 2));
  let arr2 = a.slice(Math.floor(n / 2));

  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);
  return merge(arr1, arr2);
};

const merge = (a, b) => {
  let c = [];

  while (a.length > 0 && b.length > 0) {
    c.push(a[0] > b[0] ? b.splice(0, 1)[0] : a.splice(0, 1)[0]);
  }
  if (a.length > 0) c = c.concat(a);
  if (b.length > 0) c = c.concat(b);

  return c;
};

console.log(mergeSort([4, 2, 1, 3]));
