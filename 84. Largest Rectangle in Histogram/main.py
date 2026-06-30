from typing import List

class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        new_stack: List[tuple[int,int]] = []
        result = 0

        for i in range(len(heights)):
            start = i

            while new_stack and new_stack[-1][1] > heights[i]:
                idx, h = new_stack.pop()
                result = max(result, h * (i - idx))
                start = idx

            new_stack.append((start, heights[i]))

        while new_stack:
            temp = new_stack.pop()
            result = max(result, temp[1] * (len(heights) - temp[0]))

        return result
