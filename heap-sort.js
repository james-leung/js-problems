const heapSort = (a) => {
  buildMaxHeap(a);
  let n = a.length;
  for (let i = n - 1; i >= 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    heapify(a, i, 0);
  }
  return a;
};

const buildMaxHeap = (a) => {
  let n = a.length;
  for (let j = Math.floor(n / 2); j >= 0; j--) heapify(a, n, j);
};

const heapify = (a, n, j) => {
  let left = 2 * j;
  let right = 2 * j + 1;

  let leftVal = left < n ? a[left] : a[j];
  let rightVal = right < n ? a[right] : a[j];
  max = a.indexOf(Math.max(a[j], leftVal, rightVal));

  // Decide whether to swap parent and child element based on size
  if (max !== j) {
    [a[j], a[max]] = [a[max], a[j]];
    heapify(a, n, max);
  }
};

console.log(heapSort([3, 2, 5, 1, 4]));
