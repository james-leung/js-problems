const combinationSum = (candidates, target) => {
  res = [];
  candidates.sort();

  let n = candidates.length;

  const backtracking = (lst, i, target) => {
    if (target === 0) {
      res.push(lst);
      return;
    }

    for (let j = i; j < n; j++) {
      if (target < candidates[j]) break;
      else backtracking(lst.concat(candidates[j]), j, target - candidates[j]);
    }
  };

  backtracking([], 0, target);
  return res;
};

console.log(combinationSum([2, 3, 6], 9));
