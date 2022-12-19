/**
 * 34+ => 3+4
 * @param {string[]} tokens
 * @return {number}
 */
const operator = {
  "+": "+",
  "-": "-",
  "/": "/",
  "*": "*"

}
const evalRPN = function(tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (operator[tokens[i]]) {
      let a = stack.pop();
      let b = stack.pop();
      let result = 0;
      switch (tokens[i]) {
        case "+":
          result = b + a;
          break;
        case "-":
          result = b - a;
          break;
        case "*":
          result = b * a;
          break;
        case "/":
          result = Math.trunc(b / a);
          break;
      }
      stack.push(result);
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }
  return stack.pop();
 
};