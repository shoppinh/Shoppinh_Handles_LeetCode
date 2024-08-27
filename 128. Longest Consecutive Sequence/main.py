# Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

# You must write an algorithm that runs in O(n) time.

 

# Example 1:

# Input: nums = [100,4,200,1,3,2]
# Output: 4
# Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
# Example 2:

# Input: nums = [0,3,7,2,5,8,4,6,0,1]
# Output: 9


from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0
        nums.sort()
        longest_length = 0
        current_length = 1
        for i in range(1, len(nums)):
            if nums[i] == nums[i-1] + 1:
                current_length += 1
            elif nums[i] == nums[i-1]:
                continue
            else:
                longest_length = max(longest_length, current_length)
                current_length = 1
                
        return max(longest_length, current_length)
    
def test_case_1():
    solution = Solution()
    assert solution.longestConsecutive([100,4,200,1,3,2]) == 4
    print("Test case 1 passed")
    
def test_case2():
    solution = Solution()
    assert solution.longestConsecutive([0,3,7,2,5,8,4,6,0,1]) == 9
    print("Test case 2 passed")
    
def test_case3():
    solution = Solution()
    assert solution.longestConsecutive([1,2,0,1]) == 3
    print("Test case 3 passed")
    
if __name__ == '__main__':
    test_case_1()
    test_case2()
    test_case3()
    