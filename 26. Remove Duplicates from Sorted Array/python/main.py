from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        unique_count = 1
        for i in range(1, len(nums)):
            if nums[i] != nums[unique_count - 1]:
                nums[unique_count] = nums[i]
                unique_count= unique_count + 1
        return unique_count
if __name__ == '__main__':
    s = Solution()
    print(s.removeDuplicates([1,2,2,2,3,3,4,4,4,5,5,5,6,7,7])) # 1
    