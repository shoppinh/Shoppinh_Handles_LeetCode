/**
 * The Tribonacci sequence Tn is defined as follows: 
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * Given n, return the value of Tn.
 * @param {number} n
 * @return {number}
 */
// Time exceeded problem
// const tribonacci = function(n) {
//     switch (n) {
//         case 0:
//             return 0;
//         case 1:
//           return 1;
//         case 2:
//           return 1;
//         default:
//           return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
//     }
// };

const tribonacci = function(n) {
    let result = 0;
    let first = 0;
    let second = 1;
    let third = 1;
    if (n === 0) {
        return first;
    }
    if (n === 1) {
        return second;
    }
    if (n === 2) {
        return third;
    }
    for (let i = 3; i <= n; i++) {
        result = first + second + third;
        first = second;
        second = third;
        third = result;
    }
    return result;
}

console.log("tribonacci(12) = ", tribonacci(12));