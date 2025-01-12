from typing import List


class Solution:
    def third_max(self, nums: List[int]) -> int:
        distinct_arr= list(set(nums))
        distinct_arr.sort()
        return distinct_arr[-3 if len(distinct_arr) >=3 else -1]
    def third_max_2(self, nums: List[int]) -> int:
        # ... existing code ...
        max1 = None
        max2 = None
        max3 = None
        for num in nums:
            if num == max1 or num == max2 or num == max3:
                continue
            if max1 is None or num > max1:
                max3 = max2
                max2 = max1
                max1 = num
            elif max2 is None or num > max2:
                max3 = max2
                max2 = num
            elif max3 is None or num > max3:
                max3 = num
        return max3 if max3 is not None else (max1 if max1 is not None else float('-inf'))
        # ... existing code ...
if __name__ == '__main__':
    s = Solution()
    print(s.third_max([1,2,10,11,12,10,15,14])) # 1
    