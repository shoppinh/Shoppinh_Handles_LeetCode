from collections import defaultdict


class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # Approach: We use sliding window and hash map frequency. During the expansion to right, at each window, we find the character with highest freq called max_freq
        # If the len(s)-max_freq <=k -> update result then expand to right, else shrink the window from left
        # The thing about max_freq between normal and optimal one is that max_freq shouldn't be based on current window
        # It should be "largest count ever observed while expanding"
        left = 0
        right = 0
        max_freq = 0
        result = 0
        curr_freq_map: defaultdict[str, int] = defaultdict(int)
        while right < len(s):
            curr_freq_map[s[right]] +=1
            max_freq = max(max_freq,curr_freq_map[s[right]])
            if right-left+1 - max_freq>k:
                curr_freq_map[s[left]]-=1
                left+=1
            result = max(result,right-left+1)

            right+=1

        return result
