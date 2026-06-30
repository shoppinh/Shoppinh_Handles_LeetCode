from typing import List
import logging
logging.basicConfig(level=logging.DEBUG, format="%(message)s")

class Solution:

# Approach 1: Two-phase approach
# The first thing to do is find the defection index, for example
# In this array [2,3,4,5,0,1], the defection index is 4, so when we find the middle
# that value would become middle = middle + defection index, left = left + defection index, right = right + infection index,
# However, if the value pass the array length, we have to tweak it 
# For example: left = 0 -> new_left = 4, right = (5+4)%6 = 3, middle = (3+4)%6 = 1
    def find_min(self, arr: List[int], target: int) -> int:
        defection_idx = 0
        defection_left = 0
        defection_right = len(arr) - 1

        # Find the defection_idx, the point which breaks the current flow
        # However, the searching algorithm should maintain the Olog(n) time complexity
        # Approach 1: Brute Force
        # for i in range(1, len(arr)):
        #     if arr[i] < arr[i-1]:
        #         defection_idx = i
        #         break

        # Approach 2: Binary Search 

        while defection_left < defection_right:
            defection_middle = defection_left + (defection_right - defection_left) // 2
            if arr[defection_middle] > arr[defection_right]:
                left = defection_middle + 1
            else:
                right = defection_middle

        defection_idx = defection_left

        left = 0
        right = len(arr) -1

        while left <= right:
            middle = left + (right - left) // 2
            middle_value = arr[(middle + defection_idx) % len(arr)]
            if target > middle_value:
                left = middle + 1
            elif target < middle_value:
                right = middle -1
            else:
                return middle
        return -1

# Approach 2

    def search(self, nums: List[int], target: int) -> int:
        
        left = 0
        right = len(nums) - 1
        middle = 0

        while left <= right:
            middle = left + (right - left) // 2
            if nums[middle] == target:
                return middle
            if nums[left] <= nums[middle]:
                if nums[left] <= target < nums[middle]:
                    right = middle  - 1
                else:
                    left = middle + 1

            else:
                if nums[right] >= target > nums[middle]:
                    left = middle +1
                    
                else:
                    right = middle -1

        return -1



if __name__ == '__main__':
    s = Solution()
    print(s.search([2,3,4,5,0,1,2],3))

