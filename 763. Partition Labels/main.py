# You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

# Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

# Return a list of integers representing the size of these parts.

 

# Example 1:

# Input: s = "ababcbacadefegdehijhklij"
# Output: [9,7,8]
# Explanation:
# The partition is "ababcbaca", "defegde", "hijhklij".
# This is a partition so that each letter appears in at most one part.
# A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
# Example 2:

# Input: s = "eccbbbbdec"
# Output: [10]
from typing import List


class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        results = []
        last_occurrence = {}
        current_partition = {}
        
        for i, c in enumerate(s):
            last_occurrence[c] = i
            current_partition[c] = i
            
        start, end = 0, last_occurrence[s[0]]
        
        for i, c in enumerate(s[1:], 1):
            if i > end:
                results.append(end-start +1)
                start = i
            end = max(end, last_occurrence[c])
            
        results.append(len(s) - start)
        
        return results
            
        
        
if __name__ == "__main__":
    s = Solution()
    print(s.partitionLabels("ababcbacadefegdehijhklij"))
    # assert s.partitionLabels("ababcbacadefegdehijhklij") == [9, 7, 8]
    # assert s.partitionLabels("eccbbbbdec") == [10]