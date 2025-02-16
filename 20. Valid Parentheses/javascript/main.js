/**
 * @param {string} s
 * @return {boolean}
 */
// Brute force

const isValid1 = function (s) {
  const stack = [];
  const bracketMap = { ")": "(", "}": "{", "]": "[" };
  for (let element of s) {
    if (Object.values(bracketMap).includes(element)) {
      stack.push(element);
    } else if (stack[stack.length - 1] !== bracketMap[element]) return false;
    else stack.pop();
  }
  return stack.length === 0;
};

// Another approach
const isValid2 = function (s) {
  const stack = [];
  const bracketMap = { "(": ")", "{": "}", "[": "]" };

  for (let char of s) {
    if (bracketMap[char]) {
      // If it's an opening bracket, push the corresponding closing bracket
      stack.push(bracketMap[char]);
    } else if (stack.pop() !== char) {
      // If it's a closing bracket, check if it matches the last opened bracket
      return false;
    }
  }

  // If stack is empty, all brackets were properly closed
  return stack.length === 0;
};
