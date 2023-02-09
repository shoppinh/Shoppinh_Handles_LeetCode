/**
 * @param {string[]} ideas
 * @return {number}
 */

// Brute force solution leads to time out exceed problem
function swapFirstCharactersAndConcat(str1, str2) {
  let newStr1 = str2[0] + str1.slice(1);
  let newStr2 = str1[0] + str2.slice(1);
  return {
    newStr1,
    newStr2,
  };
}
const distinctNames = function (ideas) {
  const set = new Set();
  for (let i = 0; i < ideas.length; i++) {
    const ideaA = ideas[i];
    for (let j = 0; j < ideas.length; j++) {
      const ideaB = ideas[j];
      if (ideaA === ideaB) continue;
      const { newStr1, newStr2 } = swapFirstCharactersAndConcat(ideaA, ideaB);
      if (ideas.includes(newStr1) || ideas.includes(newStr2)) continue;
      const result = newStr1 + " " + newStr2;
      set.add(result);
    }
  }
  return set.size;
};

// Hashmap solution however still be time out exceed problem

function swapFirstCharactersAndConcat2(str1, str2, ideas) {
  let newStr1 = str2[0] + str1.slice(1);
  let newStr2 = str1[0] + str2.slice(1);
  if (str1[0] === str2[0]) return null;
  if (str1.slice(1) === str2.slice(1)) return null;
  if (ideas.includes(newStr1) || ideas.includes(newStr2)) return null;
  return newStr1 + " " + newStr2;
}
const distinctNames2 = function (ideas) {
  const map = {};
  let count = 0;
  for (const idea of ideas) {
    for (let i = 0; i < ideas.length; i++) {
      if (idea === ideas[i]) continue;

      const newName = swapFirstCharactersAndConcat2(idea, ideas[i], ideas);

      if (newName && !map[newName]) {
        map[newName] = true;
        count++;
      }
    }
  }
  return count;
};


const distinctNames3 = function (ideas) {
  
  let map = {}



  for(let idea of ideas){
    // Separate first character and others into two variables
    // Rule of naming a company: - Avoid using same firstC
    //                           - Avoid using same others
      let firstC = idea.slice(0,1)
      let others = idea.slice(1)
      // Store the first character as key and others as value(a Set) in the map
      if(!map[firstC]) map[firstC] = new Set()
      map[firstC].add(others)
  }
  // Get all first characters
  let keys = Object.keys(map);
  let count = 0;

  for(let i =0; i<keys.length; i++){
      let firstSet = map[keys[i]]
      for(let j =i+1; j<keys.length; j++){
          let secondSet = map[keys[j]]
          // Get the number of same behind string between two sets
          let sameCount = 0;
          for(let c of firstSet){
              if(secondSet.has(c)) sameCount++ 
          }
          // This is the formula to calculate the number of possible combinations of two substring
          count += 2 * (firstSet.size - sameCount) * (secondSet.size - sameCount)
      }
  }

  return count;
}
console.log(
  "🚀 ~ file: index.js:6 ~ distinctNames ~ distinctNames",
  distinctNames2(["coffee", "donuts", "time", "toffee"])
);
