class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) <1:
            return len(s)
        result = 0
        char_to_idx: dict[str, int] = {}
        left = 0
        for right in range(len(s)):
            if s[right] in char_to_idx:
                # Update the left pointer to the last occurrence of s[right] char, however, has to move forward
                # For example, the scenario is "abba"
                left = max(left, char_to_idx[s[right]]+1)

            char_to_idx[s[right]] = right
            result = max(right-left+1, result)

        return result


if __name__ == '__main__':
    s = Solution()
    print(s.lengthOfLongestSubstring("abcda"))
