function filterDuplicate(U) {
  const hashKey = {};
  const position = {};

  for (let i = 0; i < U.length; i++) {
    for (let j = 0; j < U[i].length - 3; j++) {
      const tempSubstr = U[i].substr(j, 3);

      if (hashKey[tempSubstr] !== undefined) {
        hashKey[tempSubstr] += 1;
        position[tempSubstr].add(i);
      } else {
        hashKey[tempSubstr] = 1;
        position[tempSubstr] = new Set([i]);
      }
    }
  }

  const newSet = new Set();
  for (let key in hashKey) {
    if (hashKey[key] >= 2) {
      newSet.add(key);
    }
  }



  const result = new Set();
  for (let i of newSet) {
    for (let j of position[i]) {
      result.add(U[j]);
    }

  }

  return result;
}

console.log(
  "result",
  filterDuplicate([
    "ababa123s",
    // "qweascxyzxzzxcvbabcn",
    // "zaqxswxyzrdevfr",
    // "qweasabcdzxcvbabcn",
    // "poiABCumnbvcxkjhg",
    // "njibhuvggy",
    // "lmbABvxaABgjkl"
  ])
);
