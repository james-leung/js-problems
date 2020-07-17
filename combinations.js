var subsets = function(nums) {
  let subsets = []
  
  const addSubsets = (subset) => {
      subsets.push(subset);
      for (let i = 0; i < subset.length; i++){
          let n = subset.splice(i, 1);
          addSubsets(subset.slice()) 
          subset.splice(i, 0, n);
      }
  }
  addSubsets(nums);
  return subsets;
};