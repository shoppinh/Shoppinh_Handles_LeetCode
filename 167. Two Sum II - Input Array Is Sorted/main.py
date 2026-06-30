from typing import List


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        result:List[int] = []
        # Since solution is limited to constant extra space -> cannot use hash map
        # Use two pointers to solve this problem
        left = 0
        right = len(numbers)-1

        while left < right:
            temp_sum = numbers[left] + numbers[right]
            if temp_sum == target:
                return [left+1, right+1]
            elif temp_sum < target:
                left+=1
            else:
                right-=1

        return result

