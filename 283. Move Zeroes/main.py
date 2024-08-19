# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

 

# Example 1:

# Input: nums = [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Example 2:

# Input: nums = [0]
# Output: [0]
from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # Two pointers approach: slow and fast
        # Move all non-zero numbers to left instead of moving all zero numbers to right
        slow = 0
        for fast in range(len(nums)):
            if nums[fast]!=0:
                # Swap the current non-zero element with the element at the current slow pointer position
                nums[slow], nums[fast] = nums[fast], nums[slow]
                # Move the slow pointer to the next position
                slow += 1
                # Move the fast pointer to the next position
    def moveZeroes2(self, nums: List[int]) -> None:
        # Brute force
        zeros = []
        for num in nums[:]:
            if num == 0:
                zeros.append(num)
                nums.remove(num)
        nums.extend(zeros)
       

if __name__ == '__main__':
    s = Solution()
    nums = [0,0,1]
    s.moveZeroes(nums)
    print(nums)  # Output: [1, 3, 12, 0, 0]
    
    # nums = [0]
    # s.moveZeroes(nums)
    # print(nums)  # Output: [0]