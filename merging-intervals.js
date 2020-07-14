const merge = (intervals) => {
  intervals.sort((x, y) => x[0] - y[0]);
  let i = 0;

  while (i <= intervals.length - 2) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      intervals[i][1] = max(intervals[i][1], intervals[i + 1][1]);
      intervals.splice(i + 1, 1);
    } else i++;
  }
  return intervals;
};

// i=0

// while i<=(len(intervals)-2):

//     if intervals[i][1]>=intervals[i+1][0]:
//         intervals[i][1]=max(intervals[i][1],intervals[i+1][1])
//         intervals.pop(i+1)
//     else:
//         i+=1

// return intervals
