import re


class Solution:
    def isPalindrome(self, s: str):
        s = re.sub(r"[^a-zA-z0-9]", "", s.strip().lower())

        i = 0
        while i <= round(len(s) / 2):
            if s[i] != s[len(s) - 1 - i]:
                return False
            i = i + 1
        return True


if __name__ == "__main__":
    s = Solution()
    print(s.isPalindrome("A man, a plan, a canal: Panama"))

