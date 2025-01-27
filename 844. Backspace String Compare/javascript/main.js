/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var buildString = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
}
var backspaceCompare = function(s, t) {
    return buildString(s) === buildString(t);
};

console.log(backspaceCompare("ab#c", "ad#c"));
