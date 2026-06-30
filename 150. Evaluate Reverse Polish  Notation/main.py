from typing import List


class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        operators: set[str] = {"*", "+", "/", "-"}
        temp_stack: List[int] = []
        for char in tokens:
            if char in operators:
                right = temp_stack.pop()
                left = temp_stack.pop()
                result: int
                if char == "*":
                    result = left * right
                elif char == "+":
                    result = left + right
                elif char == "/":
                    result = int(left / right)
                else:
                    result = left - right

                temp_stack.append(result)
            else:
                temp_stack.append(int(char))

        return temp_stack[-1]

