from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:

        left = 0
        right = len(nums)-1

        while (left <= right):
            middle = left + ((right - left) // 2)
            if target < nums[middle]:
                right = middle -1
            elif target > nums[middle]:
                left = middle + 1
            else:
                return middle


        return -1


if __name__ == "__main__":
    s = Solution()
    print(s.search([-1,0,3,4,9,12], 11))
