/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */

// Greedy and backtracking approach
const minSessions = function (tasks, sessionTime) {
  const n = tasks.length;
  // Sort tasks in descending order to try larger tasks first
  tasks.sort((a, b) => b - a);
  // Create sessions array to track time used in each session
  const sessions = [];
  const backtrack = (index) => {
    if (index === n) {
      return sessions.length;
    }
    let minSessionsNeeded = Infinity;
    // Try adding to existing sessions
    for (let i = 0; i < sessions.length; i++) {
      if (sessions[i] + tasks[index] <= sessionTime) {
        sessions[i] += tasks[index];
        minSessionsNeeded = Math.min(minSessionsNeeded, backtrack(index + 1));
        sessions[i] -= tasks[index];
      }
    }
    // Create new session
    sessions.push(tasks[index]);
    minSessionsNeeded = Math.min(minSessionsNeeded, backtrack(index + 1));
    sessions.pop();

    return minSessionsNeeded;
  };
  return backtrack(0);
};

// Bitmask Approach

const minSessions2 = (tasks, sessionTime) => {
  const n = tasks.length;
  const memo = new Map();

  const dfs = (mask, remaining) => {
    const key = `${mask},${remaining}`;
    if (memo.has(key)) return memo.get(key);
    if (mask === 0) return 0;

    let res = Infinity;
    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) !== 0) {
        if (tasks[i] <= remaining) {
          // Fit task into current session
          res = Math.min(res, dfs(mask ^ (1 << i), remaining - tasks[i]));
        } else {
          // Start new session
          res = Math.min(res, 1 + dfs(mask ^ (1 << i), sessionTime - tasks[i]));
        }
      }
    }

    memo.set(key, res);
    return res;
  };

  const fullMask = (1 << n) - 1;
  return dfs(fullMask, 0);
};

// Dynamic programming approach

const minSession3 = (tasks, sessionTime) => {
  const n = tasks.length;
  const size = 1 << n;
  const dp = new Array(size).fill(Infinity);
  dp[0] = 0;

  // Precompute time used by each subset
  const subsetTime = new Array(size).fill(0);
  for (let mask = 1; mask < size; mask++) {
    let time = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) time += tasks[i];
    }
    subsetTime[mask] = time;
  }

  for (let mask = 1; mask < size; mask++) {
    for (let sub = mask; sub > 0; sub = (sub - 1) & mask) {
      if (subsetTime[sub] <= sessionTime) {
        dp[mask] = Math.min(dp[mask], dp[mask ^ sub] + 1);
      }
    }
  }

  return dp[size - 1];
};

console.log(minSessions2([2, 2, 4, 4, 4, 5, 5, 6, 6, 10], 12));
