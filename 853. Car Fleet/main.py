from typing import List

class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pos_time_pairs: List[tuple[int,float]] = [(p, (target - p) / s) for p, s in zip(position, speed)]
        pos_time_pairs.sort(key=lambda x:x[0])
        result = 0
        max_curr_time = 0

        for pair in reversed(pos_time_pairs):
            if pair[1] > max_curr_time:
                result += 1
                max_curr_time = pair[1]

        return result
# n cars at given miles a.k.a position, traveling to reach mile target
# target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
# [(0,1),(3,3),(5,1),(8,4),(10,2)]
# times = [12,3,7,1,1]

# stack = [1,7,12]
# return len(time)
