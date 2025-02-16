"""Module to find the longest strictly increasing or strictly decreasing subarray."""

from typing import List

class Solution:
    """Class to find the longest monotonic subarray."""  
    def longest_monotonic_subarray(self, nums: List[int]) -> int:
        """Return the length of the longest strictly increasing or strictly decreasing subarray."""
        if len(nums) <= 1:
            return len(nums)
        inc, dec, max_len = 1, 1, 1
        for i in range(1, len(nums)):
            if nums[i] > nums[i-1]:
                inc = inc + 1
                dec = 1
            elif nums[i] < nums[i-1]:
                dec = dec + 1
                inc = 1
            else:
                inc = 1
                dec = 1
        max_len = max(max_len, inc, dec)
        return max_len

if __name__ == "__main__":
    s = Solution()
    print(s.longest_monotonic_subarray([1,4,3,3,2]))
    