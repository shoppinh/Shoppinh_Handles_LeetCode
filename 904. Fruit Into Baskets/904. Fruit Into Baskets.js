// The main point of this problem is using the dynamic size window slide to track the longest window slide

/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = function (fruits) {
  let max = 0;
  let basket = {};
  // The start of the sliding window, in this case, we use the sliding window with dynamic size to check
  // if the current fruit is the same as the first fruit in the sliding window, if it is,
  // we don't need to remove the first fruit
  let start = 0;
  for (let i = 0; i < fruits.length; i++) {
    // Put the fruit in the basket
    if (basket[fruits[i]] === undefined) {
      basket[fruits[i]] = 1;
    } else {
      basket[fruits[i]]++;
    }
    // If the basket has more than 2 fruits, it means the current fruit is not same type as the first
    // then remove the first fruit
    while (Object.keys(basket).length > 2) {
      basket[fruits[start]]--;
      if (basket[fruits[start]] === 0) {
        delete basket[fruits[start]];
      }
      // Move the start of the sliding window
      start++;
    }
    // Update the max, compare the current max with the current length of the sliding window

    max = Math.max(max, i - start + 1);
  }
  return max;
};
console.log(
  "🚀 ~ file: 904. Fruit Into Baskets.js:6 ~ totalFruit ~ totalFruit",
  totalFruit([1, 2, 1, 2, 2, 3])
);

// Optimized solution 

const totalFruit2 = function (fruits) {
  // Using two pointers to track the start and end of the sliding window
  let start = 0;
  let end = 0;
  // Using object to store the count of each fruit
  let count = {};
  let maxFruits = 0;
  let numOfTypes = 0;
  // Using numbOfTypes to check also with the count object in order to reduce the logic operation when
  // the number of types is more than 2 (do not need to delete object key)

  while (end < fruits.length) {
    if (!count[fruits[end]]) {
      numOfTypes++;
    }
    // Update the count of the current fruit
    count[fruits[end]] = (count[fruits[end]] || 0) + 1;
    end++;

    while (numOfTypes > 2) {
      count[fruits[start]]--;
      // Do not delete the object key, just check if the count is 0, if it is, then reduce the number of types
      // So that the performance will be better
      if (count[fruits[start]] === 0) {
        numOfTypes--;
      }
      start++;
    }

    maxFruits = Math.max(maxFruits, end - start);
  }

  return maxFruits;
};
