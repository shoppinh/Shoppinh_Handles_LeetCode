/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  const result = [];
  let charCount = 0;
  for (const char of s) {
    if (!/\d/.test(char)) {
      result.push(char);
      charCount++;
    } else if (charCount > 0) {
      result.pop();
      charCount--;
    } else {
      result.push(char);
    }
  }
  return result.join("");
};


var clearDigits2 = function (s) {
    const stack = [];
    for (const char of s) {
      if (/\d/.test(char)) {
        if (stack.length > 0) {
          stack.pop();
        }
      } else {
        stack.push(char);
      }
    }
    return stack.join("");
  };

// 


console.log(clearDigits2("c3b55d555"));

// ("c3b5d5555");
// abc
