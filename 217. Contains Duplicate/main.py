from typing import List


class Solution:
    def contains_duplicate(self, nums: List[int]) -> bool:
        return len(set(nums)) != len(nums)
    

if __name__ == "__main__":
    s = Solution()
    print(s.contains_duplicate([1,2,3]))
