/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
const numRollsToTarget = function(n, k, target) {
    // Initialize a dynamic programming array to keep track of ways to reach each sum
    // dp[i][j] = number of ways to reach sum j using i dice
    // Cause there are cases where the number of dice is greater than the target but we don't need to consider them.
    const dp = Array.from({ length: n+1 }, () => Array(target+1).fill(0));
    dp[0][0] = 1; // There is 1 way to reach the sum 0 (rolling no dice)

    // Define a modulus constant to prevent integer overflow
    const mod = 1e9 + 7;

    // Iterate over each die
    for (let currentDie = 1; currentDie <= n; ++currentDie) {
        // Calculate for all possible sums up to the current target 
        // constrained by the number of dice thrown so far and the desired target
        for (let currentTarget = 1; currentTarget <= Math.min(currentDie * k, target); ++currentTarget) {
            // Check for all the possible outcomes of a single die roll and update
            // Update the ways to achieve currentTarget sum considering the current die roll

            // Previous condition 

            // for (let faceValue = 1; faceValue <= k; ++faceValue) {
            //     if (currentTarget >= faceValue)
            //     dp[currentDie][currentTarget] = (dp[currentDie][currentTarget] + dp[currentDie-1][currentTarget - faceValue]) % mod;
            // }

            // Change the condition to this one
            for (let faceValue = 1; faceValue <= Math.min(currentTarget, k); ++faceValue) {
                dp[currentDie][currentTarget] = (dp[currentDie][currentTarget] + dp[currentDie-1][currentTarget - faceValue]) % mod;
            }
        }
    }

    // Return the number of ways to reach the desired target sum using all the dice
    return dp[n][target];
    
};

console.log(numRollsToTarget(2, 6, 3)); // 1