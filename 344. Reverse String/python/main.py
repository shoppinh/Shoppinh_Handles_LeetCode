from typing import List

class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        # use built-in function
        s.reverse()
        
        # use two pointers
        # left, right = 0, len(s) - 1
        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1
            
        # use for loop
        for i in range(0, len(s)//2):
            s[i], s[-i-1] = s[-i-1], s[i]
            
        return s
            

print(Solution().reverseString(["h","e","l","l","o"]))