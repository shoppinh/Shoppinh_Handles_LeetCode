from typing import Any, Dict, List


class MinStack:
    def __init__(self):
        self.stack:List[int] = []
        self.min_stack: List[int] = []

    def push(self, val: int) -> None:
        if not self.min_stack:
            self.min_stack.append(val)
        else:
            self.min_stack.append(min(self.min_stack[-1], val))
        self.stack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]


    def get_min(self) -> int:
        return self.min_stack[-1]

# Another approach, store the current_min at the time we append an element
class MinStack2:

    def __init__(self):
        self.stack: List[Dict[str,Any]] = []

    def push(self, value: int) -> None:
        if not self.stack:
            curr_min = value
        else:
            curr_min = min(self.stack[-1]["curr_min"],value)

        self.stack.append({"value":value, "curr_min": curr_min})

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1]["value"]


    def get_min(self) -> int:
        return self.stack[-1]["curr_min"]
