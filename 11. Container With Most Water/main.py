from typing import List
class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_water = 0
        left = 0
        right = len(height) - 1

        while left <= right:
            max_water = max((right - left)*min(height[left],height[right]),max_water)
            if height[left] < height[right]:
                left+=1
            else:
                right-=1

        return max_water

if __name__ == "__main__":
    s = Solution()
    s.maxArea([1,8,6,2,5,4,8,3,7])

    print("🚀 ------------------------------------------------------------------------------🚀")
    print("🚀 ~ main.py:14 ~ s.maxArea([1,8,6,2,5,4,8,3,7]):", s.maxArea([1,8,6,2,5,4,8,3,7]))
    print("🚀 ------------------------------------------------------------------------------🚀")

