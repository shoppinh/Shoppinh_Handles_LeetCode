from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # Approach 1 flatten the array, use binary search like normal
        # Approach 2 , use binary search like normal, map the index to matrix index, for example rows = 4, cols = 3
        # idx 5 -> (1,1) row = idx // cols, col = idx % cols
        left = 0
        rows = len(matrix)
        cols = len(matrix[0])
        right = rows * cols -1
        while left <= right:
            middle = left + (right - left) // 2
            row = middle // cols
            col = middle % cols
            if  target < matrix[row][col] :
                right = middle - 1
            elif  target >matrix[row][col]:
                left = middle + 1
            else:
                return True
        return False

if __name__ == "__main__":
    s = Solution()
    s.searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)
