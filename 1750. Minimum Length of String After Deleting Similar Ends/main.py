class Solution(object):
    def minimumLength(self, s):
        """
        :type s: str
        :rtype: int
        """
        # Using two pointers, left and right, we check if the left and right characters are the same. If they are, we move the left pointer to the right and the right
        # pointer to the left. If they are not, we break the loop and return the length of the string between the left and right pointers
        left = 0
        right = len(s) - 1
        while left < right:
            if s[left] != s[right]:
                break
            # Check if the left consecutive characters are the same        
            while left < right and s[left] == s[left + 1]:
                left += 1
            # Check if the right consecutive characters are the same
            while left < right and s[right] == s[right - 1]:
                right -= 1
                
            if left == right:
                return 0
            left += 1
            right -= 1
        return right - left + 1
        
# Test cases
if __name__ == '__main__':
    s = Solution()
    print(s.minimumLength("aaaa"))
    print(s.minimumLength("aaaa"))
    print(s.minimumLength("cabaabac"))
    print(s.minimumLength("aabccabba"))
    print(s.minimumLength("a"))
    print(s.minimumLength("c"))
    print(s.minimumLength("ab"))
    print(s.minimumLength("aba"))
        