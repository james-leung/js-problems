const genAscendingArray = (cLength, length, index, indSet) => {
  if (index === null || isNaN(index)) index = length - 1;
  indSet = indSet || new Array(length).fill(0);

  let ceiling = index < length - 1 ? indSet[index + 1] : cLength - 1;
  for (let i = 0; i <= ceiling; i++) {
    indSet[index] += i;

    if (index === 0) {
      indSets.push(indSet.slice());
    } else {
      genAscendingArray(cLength, length, index - 1, indSet);
    }
    indSet[index] -= i;
  }
  return indSets;
};
