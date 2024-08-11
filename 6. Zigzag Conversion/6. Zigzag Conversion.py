import math

class Solution(object):

    # Approach 1: Brute force
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if numRows == 1 or numRows >= len(s):
            return s
        # Initialze the matrix
        matrix = [['' for _ in range(-(-len(s)//2))] for _ in range(numRows)]

        # Direction: 1 for going down, -1 for going up
        direction = 1

        # Current row and column
        row, col = 0, 0
        count = 0

        for c in s:
            if count == len(s):
                break
            
            matrix[row][col] = c
            count += 1
            # Check if the current position is the start

            if row == 0 and col == 0:
                row += direction
                continue

            # Change direction when we reach the boundary
            if row == 0 or row == numRows - 1:
                direction = -direction

            # Move to the next position
            row += direction
            if (direction < 0):
                col += 1
                
        # Join the rows to form the final string
        result = ''
        for row in matrix:
            result += ''.join(row)
        return result
    

    # Approach 2: Enhanced Version (just modify how the matrix is constructed)

    def convert2(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if numRows == 1 or numRows >= len(s):
            return s
        # Initialze the matrix
        matrix = [[] for _ in range(numRows)]

        # Direction: 1 for going down, -1 for going up
        direction = 1

        idx = 0

        for c in s:
            matrix[idx].append(c)
            # Change direction when reaching the end of a row
            if idx == 0:
                direction = 1
            elif idx == numRows - 1:
                direction = -1
            idx += direction
                
        # Join the rows to form the final string
        result = ''
        for row in matrix:
            result += ''.join(row)
        return result

            

        

if __name__ == "__main__":
    s =  Solution()
    print(s.convert("LEETCODEISHIRING", 1))