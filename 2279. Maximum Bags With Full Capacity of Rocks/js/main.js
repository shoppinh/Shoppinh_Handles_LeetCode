/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
const maximumBags = function (capacity, rocks, additionalRocks) {
  const n = capacity.length;
  const remainingCapacity = [];
  let fullBags = 0;
  
  // Count already full bags and collect remaining capacities
  for (let i = 0; i < n; i++) {
    const remaining = capacity[i] - rocks[i];
    if (remaining === 0) {
      fullBags++;
    } else {
      remainingCapacity.push(remaining);
    }
  }
  
  // Sort remaining capacities and fill as many as possible
  remainingCapacity.sort((a, b) => a - b);
  for (let need of remainingCapacity) {
    if (additionalRocks >= need) {
      additionalRocks -= need;
      fullBags++;
    } else {
      break;
    }
  }
  
  return fullBags;
};
