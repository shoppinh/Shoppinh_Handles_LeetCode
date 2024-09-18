# Given a list of non-negative integers nums, 
# arrange them such that they form the largest number and return it.

# Since the result may be very large, so you need to return a string instead of an integer.

# Example 1:

# Input: nums = [10,2]
# Output: "210"
# Example 2:

# Input: nums = [3,30,34,5,9]
# Output: "9534330"
from typing import List
from functools import cmp_to_key

class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        # Convert all numbers to strings
        nums = [str(num) for num in nums]
        
        # Define comparison function
        def compare(x, y):
            return int(y+x) - int(x+y)
        
        # Sort using the comparison function
        nums.sort(key=cmp_to_key(compare))
        
        # Join the sorted numbers to form the largest number
        largest_num = ''.join(nums)
        
        # Remove leading zeros and return the result
        return largest_num.lstrip('0') or '0'

if __name__ == '__main__':
    s = Solution()
    print(s.largestNumber([10,2])) # "210"
    print(s.largestNumber([3,30,34,5,9])) # "9534330"
