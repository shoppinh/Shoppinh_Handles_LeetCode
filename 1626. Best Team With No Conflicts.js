/**
 * You are the manager of a basketball team. For the upcoming tournament, you want to choose the team with the highest overall score.
 * The score of the team is the sum of scores of all the players in the team.
 * However, the basketball team is not allowed to have conflicts. A conflict exists if a younger player has a strictly higher score than an older player.
 * A conflict does not occur between players of the same age.
 * Given two lists, scores and ages, where each scores[i] and ages[i] represents the score and age of the ith player, respectively, return the highest overall score of all possible basketball teams.
 * Example 1:
 * Input: scores = [1,3,5,10,15], ages = [1,2,3,4,5]
 * Output: 34
 * Explanation: You can choose all the players.
 *
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
const bestTeamScore = function (scores, ages) {
  // First have to sort by age
  const players = [];
  for (let i = 0; i < scores.length; i++) {
    players.push([ages[i], scores[i]]);
  }
  players.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  // Create a dp array to store the max score of a team which includes the ith player
  const dp = new Array(players.length).fill(0);
  let max = 0;
  for (let i = 0; i < players.length; i++) {
    dp[i] = players[i][1];
    for (let j = 0; j < i; j++) {
      if (players[i][1] >= players[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + players[i][1]);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};
console.log(
  "🚀 ~ file: 1626. Best Team With No Conflicts.js:20 ~ bestTeamScore ~ bestTeamScore",
  bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1])
);
