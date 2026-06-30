from typing import List


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # Brute force: create 3 arrays of hashmap, there are 9 rows, 9 columns and 9 squares -> can track it
        # rows[], columns[], boxes[] (just divide the co-ordinate(i,j) to 3 -> get the)
        rows:List[set[str]] = [set() for _ in range(9)]
        cols: List[set[str]]= [set() for _ in range(9)]
        boxes: List[set[str]]= [set() for _ in range(9)]
        for i in range(9):
            for j in range(9):
                if board[i][j] == '.':
                    continue
                box_idx = 3* (i//3)+ (j//3)
                if board[i][j] in rows[i] or board[i][j] in cols[j] or board[i][j] in boxes[box_idx]:
                    return False
                rows[i].add(board[i][j])
                cols[j].add(board[i][j])
                boxes[box_idx].add(board[i][j])

        return True

if __name__ == "__main__":
    s = Solution()
    board =[
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]]
    print(s.isValidSudoku(board))
