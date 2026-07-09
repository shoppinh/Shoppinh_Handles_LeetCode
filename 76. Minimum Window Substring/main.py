from collections import Counter
class Solution:
    def minWindow(r, t: str) -> str:
        if len(s) < len(t):
            return ""
        target_freq = Counter(t)
        need = len(target_freq)
        left = 0
        right = 0
        source_freq = {}
        have = 0

        min_len = float("inf")
        min_range = (0, 0)

        while right < len(s) and left <= right:
            char = s[right]
            if s[right] in target_freq:
                source_freq[char] = source_freq.get(char, 0) + 1
                if source_freq[char] == target_freq[char]:
                    have += 1

            while have == need:
                if right - left + 1 < min_len:
                    min_len = right - left + 1
                    min_range = (left, right)
                if s[left] in target_freq:
                    source_freq[s[left]] -= 1
                    if source_freq[s[left]] < target_freq[s[left]]:
                        have -= 1
                left += 1

            right += 1

        return s[min_range[0]:min_range[1] + 1] if min_len != float("inf") else ""
        

if __name__ == "__main__":
    s = Solution()
    string = "ADOBECODEBANC"
    target = "ABC"
    print(s.minWindow(string,target))
