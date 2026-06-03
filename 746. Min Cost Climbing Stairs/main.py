from typing import List


class Solution:
    # Classic dynamic programming problem
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        prev1, prev2 = 0,0
        for i in range(2, len(cost)+1):
            prev2, prev1 = prev1, min(prev1 + cost[i-1], prev2 + cost[i-2])
        return prev1
        

if __name__ == "__main__":
    s = Solution()
    print(s.minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))