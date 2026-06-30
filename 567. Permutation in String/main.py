
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        len_s1 = len(s1)
        len_s2 = len(s2)

        # Edge case: if s1 is longer than s2, no permutation can exist
        if len_s1 > len_s2:
            return False

        # Initialize frequency arrays for s1 and the current window in s2
        # Since there are only lowercase English letters, an array of size 26 is efficient.
        s1_counts = [0] * 26
        window_counts = [0] * 26

        # Populate s1_counts and the initial window_counts for the first len_s1 characters of s2
        for i in range(len_s1):
            s1_counts[ord(s1[i]) - ord('a')] += 1
            window_counts[ord(s2[i]) - ord('a')] += 1

        # Check if the initial window is a permutation
        if s1_counts == window_counts:
            return True

        # Slide the window across s2
        # Since the size of the window is fixed, no need to introduce two variable (left and right)
        for i in range(len_s1, len_s2):
            window_counts[ord(s2[i]) - ord('a')] += 1  # Add the new character entering the window
            window_counts[ord(s2[i - len_s1]) - ord('a')] -= 1  # Remove the character leaving the window
            if s1_counts == window_counts:
                return True

        return False

if __name__ == "__main__":
    s = Solution()
    print(s.checkInclusion("ab","abcdab"))
