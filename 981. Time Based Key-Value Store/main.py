
from typing import List


class TimeMap:
    def __init__(self):
        self.my_dict: dict[str, List[tuple[str, int]]] = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.my_dict.setdefault(key, [])
        self.my_dict[key].append((value, timestamp))

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.my_dict:
            return ''
        tuple_list = self.my_dict[key]
        left = 0
        right = len(tuple_list) - 1

        while left <= right:
            middle = left + (right - left) // 2
            if tuple_list[middle][1] > timestamp:
                right = middle - 1

            elif tuple_list[middle][1] < timestamp:
                left = middle + 1

            else:
                return tuple_list[middle][0]

        if right >= 0:
            return tuple_list[right][0]
        else:
            return ""

if __name__ == "__main__":
    # Your TimeMap object will be instantiated and called as such:
    obj = TimeMap()
    obj.set("foo", "bar", 1)
    param_2 = obj.get("foo",1)
