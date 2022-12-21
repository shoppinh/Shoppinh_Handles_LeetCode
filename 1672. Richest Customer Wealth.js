/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        max = Math.max(max, sum);
    }
    return max;
};

console.log("Maximum wealth: ", maximumWealth([[1,5],[7,3],[3,5]]));