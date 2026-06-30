from typing import List


class Solution:
    def two_sum(self, nums: List[int], target:int) -> List[int]:
        hash_map: dict[int,int] = {}
        for index,num in enumerate(nums):
            if target - num in hash_map:
                return [hash_map[target - num], index]
            hash_map[num] = index
        return []
        

if __name__ == "__main__":
    s = Solution()
    nums = [3,3,]
    target = 6
    print(s.two_sum(nums,target))