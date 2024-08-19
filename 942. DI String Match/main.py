# A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

# s[i] == 'I' if perm[i] < perm[i + 1], and
# s[i] == 'D' if perm[i] > perm[i + 1].
# Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

 

# Example 1:

# Input: s = "IDID"
# Output: [0,4,1,3,2]
# Example 2:

# Input: s = "III"
# Output: [0,1,2,3]
# Example 3:

# Input: s = "DDI"
# Output: [3,2,0,1]
from typing import List


class Solution:
    def diStringMatch(self, s: str) -> List[int]:
        left, right = 0, len(s)
        result = []
        for char in s:
            if char == 'I':
                result.append(left)
                left += 1
            else:
                result.append(right)
                right -= 1
        result.append(left)
        return result
    
    
if __name__ == '__main__':
    s = Solution()
    print(s.diStringMatch("IDID"))  # Output: [0,4,1,3,2]
    print(s.diStringMatch("III"))  # Output: [0,1,2,3]
    print(s.diStringMatch("DDI"))  # Output: [3,2,0,1]
        