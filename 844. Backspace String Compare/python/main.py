class Solution:

    def buildString(self, s: str) -> str:
        stack = []
        for char in s:
            if char == '#':
                stack.pop()
            else:
                stack.append(char)
        return ''.join(stack)

    def backspaceCompare(self, s: str, t: str) -> bool:
        return self.buildString(s) == self.buildString(t)


if __name__ == "__main__":
    s = "ab#c"
    t = "ad#c"
    print(Solution().backspaceCompare(s, t))
