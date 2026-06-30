from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # if i = 0 or i = len(nums) -1, we just need one side (left or right)
        n = len(nums)
        result = [1] * n

        prefix = 1
        postfix = 1

        for i in range(n):
            result[i] = prefix
            prefix*=nums[i]

        for i in range( n-1,-1,-1):
            result[i] *= postfix
            postfix *= nums[i]

        return result
