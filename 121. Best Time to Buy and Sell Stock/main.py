from typing import List

# Greedy approach
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) <= 1:
            return 0
        min_v = prices[0]
        max_v = 0
        for price in prices:
            min_v = min(price, min_v)
            max_v = max(price-min_v,max_v)
            

        return max_v
        
# Two pointers
class Solution2:
    def maxProfit2(self, prices: List[int]) -> int:
        if len(prices) <= 1:
            return 0
        
        left = 0
        profit = 0
        right = 1
        while right < len(prices):
            if prices[right] < prices[left]:
                left = right
            else:
                profit = max(profit, prices[right] - prices[left])
            right = right + 1

            
        return profit

        
 
if __name__ == "__main__":
    s = Solution()
    print(s.maxProfit([7,6,4,3,2]))