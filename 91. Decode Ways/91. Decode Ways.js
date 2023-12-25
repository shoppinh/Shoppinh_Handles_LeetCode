/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function(s) {
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    // Using dynamic programming with dp[n] is the number of ways to decode s[0..n-1]
    dp[0] = 1;

    for (let i = 1; i <= n; ++i) {
        // One digit
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }
        // Two digits
        if (i > 1 && s[i - 2] !== '0' && (Number(s[i - 2]) * 10 + Number(s[i - 1])) <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[n];
};
console.log(numDecodings("11106"));