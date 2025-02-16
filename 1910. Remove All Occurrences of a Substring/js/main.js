/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  if (s.length < part.length) {
    return s;
  }
  // Using sliding window
  let startP = 0;
  let endP = part.length - 1;

  //   If the substring occurs, remove and reduce the startP and endP with the value of part.length
  while (endP < s.length) {
    const substr = s.slice(startP, endP + 1);
    if (substr === part) {
      s = s.substring(0, startP) + s.substring(endP + 1, s.length);
      startP = Math.max(0, startP - part.length);
      endP = Math.max(part.length - 1, endP - part.length);
    } else {
      startP++;
      endP++;
    }
  }
  return s;
};

// using stack (another way)

var removeOccurrences2 = function (s, part) {
  const stack = [];
  const partLength = part.length;

  for (let char of s) {
    stack.push(char);
    // Check if the last partLength characters match the part
    if (stack.length >= partLength) {
      const lastPart = stack.slice(-partLength).join("");
      if (lastPart === part) {
        // Remove the last partLength characters
        stack.splice(-partLength);
      }
    }
  }

  return stack.join("");
};

console.log(removeOccurrences2("axxxxyyyyb", "xy"));
