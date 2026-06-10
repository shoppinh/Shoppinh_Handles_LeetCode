from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        result = 0
        new_set = set(nums)
        # Loop through the set to ignore duplicated items like this [1,1,1,1,1,2,3,4]
        for num in new_set:
            if num-1 not in new_set:
                current_sum = 1
                curr_num = num
                while curr_num + 1 in new_set:
                    current_sum += 1
                    curr_num+=1
                result = max(result, current_sum)
        return result

if __name__ == "__main__":
    s = Solution()
    print(s.longestConsecutive([0,3,7,2,5,8,4,6,0,1]))



