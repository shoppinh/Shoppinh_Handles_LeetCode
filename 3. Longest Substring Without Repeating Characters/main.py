class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) <1:
            return len(s)
        result = 0
        char_to_idx: dict[str, int] = {}
        left = 0
        right = 0
        while right in range(len(s)):
            if s[right] in char_to_idx:
                result = max(right-left, result)
                left = max(left, char_to_idx[s[right]]+1)

            char_to_idx[s[right]] = right
            right+=1
        return max(result, right-left)


if __name__ == '__main__':
    s = Solution()
    print(s.lengthOfLongestSubstring("abcda"))
