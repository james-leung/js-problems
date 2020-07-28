var leastInterval = function (tasks, n) {
  let counter = new Array(26).fill(0);
  let max = 0;
  let maxCount = 0;
  for (let task of tasks) {
    let taskIndex = task.charCodeAt(0) - "A".charCodeAt(0);
    counter[taskIndex]++;
    if (max === counter[taskIndex]) {
      maxCount++;
    } else if (max < counter[taskIndex]) {
      max = counter[taskIndex];
      maxCount = 1;
    }
  }

  let partCount = max - 1;
  let partLength = n - (maxCount - 1);
  let emptySlots = partCount * partLength;
  let availableTasks = tasks.length - max * maxCount;
  let idles = Math.max(0, emptySlots - availableTasks);

  return tasks.length + idles;
};
