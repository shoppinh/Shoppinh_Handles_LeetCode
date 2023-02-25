/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
// idea: binary search, left = max(weights), right = sum(weights)
// In each iteration, we calculate the mid value of left and right as the capacity of the ship.
const shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((acc, cur) => acc + cur, 0);
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let need = 1;
        let cur = 0;
        for (const weight of weights) {
            if (cur + weight > mid) {
                need++;
                cur = 0;
            }
            cur += weight;
        }
        // If the number of days is greater than the given days, it means that the capacity is too small and the search space should be expanded.
        // Else it means that the capacity is large enough, but we still need to find the minimum capacity, so the search space should be narrowed.
        if (need <= days) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
    
};