from typing import Dict, List


class Solution:
    def isValid(self, s: str) -> bool:
        stack:List[str] = []
        bracket_map:Dict[str,str] = { "(": ")", "{": "}", "[": "]" }
        for char in s:
            if char in bracket_map:
                stack.append(bracket_map.get(char, ""))
            elif len(stack) ==0 or stack.pop() != char:
                return False

        return len(stack) == 0
