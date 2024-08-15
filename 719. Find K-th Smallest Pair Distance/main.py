
# The distance of a pair of integers a and b is defined as the absolute difference between a and b.

# Given an integer array nums and an integer k, return the kth smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.
# Example 1:

# Input: nums = [1,3,1], k = 1
# Output: 0
# Explanation: Here are all the pairs:
# (1,3) -> 2
# (1,1) -> 0
# (3,1) -> 2
# Then the 1st smallest distance pair is (1,1), and its distance is 0.
# Example 2:

# Input: nums = [1,1,1], k = 2
# Output: 0
# Example 3:

# Input: nums = [1,6,1], k = 3
# Output: 5

import heapq
from typing import List


# Time limit exceeded
class PriorityQueueHeap:
    def __init__(self, k, nums):
        self.k = k
        self.nums = nums
        heapq.heapify(self.nums)  # Convert nums into a heap

            
    def add(self, val):
        heapq.heappush(self.nums, val)
    
class Solution:
    def smallestDistancePair2(self, nums: List[int], k: int) -> int:
        q = PriorityQueueHeap(k, [])
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                q.add(abs(nums[i]-nums[j]))
        return q.nums[k-1]

# Approach 2: Using a sliding window to find the kth smallest distance
    def smallestDistancePair(self, numbers: List[int], k: int) -> int:
        numbers.sort()
        minDistance, maxDistance = 0, numbers[-1] - numbers[0]
        
        while minDistance < maxDistance:
            midDistance = (minDistance + maxDistance) // 2
            # If the pair count is less than k => it means that the kth pair has to be on the right side of mid distance
            if self.countPairsWithinDistance(numbers, midDistance) < k:
                minDistance = midDistance + 1
            # If the pair count is more than k => it means that the kth pair has to be on the left side of mid distance
            else:
                maxDistance = midDistance
        
        return minDistance
    # Using slide window technique to calculate number of pairs 
    def countPairsWithinDistance(self, numbers: List[int], targetDistance: int) -> int:
        count = left = 0
        for right in range(1, len(numbers)):
            while numbers[right] - numbers[left] > targetDistance:
                left += 1
            count += right - left
        return count
if __name__ == "__main__":
    s = Solution()
    print(s.smallestDistancePair([1,3,4,5,6,2,1,3,4,56,7],3))