# There is a strange printer with the following two special properties:

# The printer can only print a sequence of the same character each time.
# At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.
# Given a string s, return the minimum number of turns the printer needed to print it.

 

# Example 1:

# Input: s = "aaabbb"
# Output: 2
# Explanation: Print "aaa" first and then print "bbb".
# Example 2:

# Input: s = "aba"
# Output: 2
# Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.


# abcba
 

class Solution:
    def strangePrinter(self, s: str) -> int:
        n = len(s)
        dp = [[-1] * n for _ in range(n)]
        return self.Util(0, n - 1, s, dp)

    def Util(self, i: int, j: int, s: str, dp: list) -> int:
        if i > j:
            return 0

        if dp[i][j] != -1:
            return dp[i][j]

        first_letter = s[i]
        # If the current character is not repeated in the rest of the string
        answer = 1 + self.Util(i + 1, j, s, dp)
        for k in range(i + 1, j + 1):
            # If repeated then update the answer
            if s[k] == first_letter:
                # Splitting from i -> k - 1 (remove the last character)
                # and from k + 1 -> j             
                better_answer = self.Util(i, k - 1, s, dp) + self.Util(k + 1, j, s, dp)
                answer = min(answer, better_answer)
        dp[i][j] = answer
        return answer
    
def test_strange_printer_empty_string():
    solution = Solution()
    assert solution.strangePrinter("") == 0
def test_strange_printer_repeating_pattern():
    solution = Solution()
    assert solution.strangePrinter("aaabbb") == 2
def test_strange_printer_repeating_pattern_two_chars_followed_by_diff_char():
    solution = Solution()
    assert solution.strangePrinter("aba") == 2
    
if __name__ == "__main__":
    test_strange_printer_empty_string()
    print("Empty string passed")
    test_strange_printer_repeating_pattern()
    print("Test case 1 passed")
    test_strange_printer_repeating_pattern_two_chars_followed_by_diff_char()
    print("Test case 2 passed")