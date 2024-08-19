# Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

# Example 1:

# Input: haystack = "sadbutsad", needle = "sad"
# Output: 0
# Explanation: "sad" occurs at index 0 and 6.
# The first occurrence is at index 0, so we return 0.
# Example 2:

# Input: haystack = "leetcode", needle = "leeto"
# Output: -1
# Explanation: "leeto" did not occur in "leetcode", so we return -1.
 
 
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        haystack_length = len(haystack)
        needle_length = len(needle)
        # if haystack == needle:
        #     return 0
        
        if needle_length > haystack_length:
            return -1
        start = 0
        while start <= haystack_length - needle_length:
            if haystack[start:start+needle_length] == needle:
                return start
            start += 1
            
        return -1
            
            
if __name__ == '__main__':
    s = Solution()
    print(s.strStr('sadbutsad', 'sad'))  # Output: 0
    print(s.strStr('leetcode', 'leeto'))  # Output: -1