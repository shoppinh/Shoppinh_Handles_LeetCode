/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} maxChanges
 * @return {number}
 */
const minimumMoves = (nums, k, maxChanges) => {
    // Early return for the case where k < maxChanges
    if (k <= maxChanges) {
        return k * 2; // We can simply create k ones, each costing 2 moves
    }
    const ones = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) ones.push(i);
    }

    const N = ones.length;
    const prefix = new Array(N + 1).fill(0);
    for (let i = 0; i < N; i++) {
        prefix[i + 1] = prefix[i] + ones[i];
    }

    let minMoves = Number.MAX_SAFE_INTEGER;

    // Number of ones to collect using Action 2 (adjacent swaps)
    const minOnesCollectedByTypeTwo = Math.max(0, k - maxChanges);
    const maxOnesCollectedByTypeTwo = Math.min(k, N);

    for (let onesCollectedByTypeTwo = minOnesCollectedByTypeTwo; onesCollectedByTypeTwo <= maxOnesCollectedByTypeTwo; onesCollectedByTypeTwo++) {
        const neededCreations = k - onesCollectedByTypeTwo;
        if (neededCreations > maxChanges) continue;

        for (let l = 0; l <= N - onesCollectedByTypeTwo; l++) {
            const r = l + onesCollectedByTypeTwo;
            const mid = Math.floor((l + r - 1) / 2);
            const median = ones[mid];

            const leftCount = mid - l;
            const leftSum = median * leftCount - (prefix[mid] - prefix[l]);

            const rightCount = r - mid - 1;
            const rightSum = (prefix[r] - prefix[mid + 1]) - median * rightCount;

            const cost2 = leftSum + rightSum;
            const cost1 = neededCreations * 2; // Each creation and pickup counts as two moves

            const totalCost = cost1 + cost2;
            minMoves = Math.min(minMoves, totalCost);
        }
    }

    return minMoves;
}

console.log(minimumMoves([0,0,0,0],2,3))
