from typing import List
# The approach is simple, we will find the pivot point in wich the ascending order breaks
# However, we will use binary search to find instead of linear search
class Solution:
    def findMin(self, nums: List[int]) -> int:
        left = 0
        right = len(nums)-1

        while left<right:

            m = (left+right)//2

            if nums[m] > nums[right]:
                left = m +1

            else:
                right = m
                
        return nums[left]
