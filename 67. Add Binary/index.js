/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  const sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);

  return sum.toString(2);};
console.log(
  "🚀 ~ file: index.js:7 ~ addBinary ~ addBinary",
  addBinary("11", "1")
);
