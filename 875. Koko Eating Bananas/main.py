from typing import List
import logging
logging.basicConfig(level=logging.DEBUG, format="%(message)s")
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        # [3,6,7,11] h=8 -> k=4
        # We would use binary search to solve this problem
        # Instead of finding the indice, we find the solution (k)
        # from 1 to max(piles), in each candidate, we calculate the totalHour
        # if totalHour > h, left = middle + 1
        # else we find the solution, however, keep decrease the right to find possible 
        # optimal solutions, stop when left >right
        piles.sort()
        left = 1
        right = piles[-1]
        result = right
        middle = 0

        while left <= right:
            middle = left + (right - left) // 2
            # logging.info("%s", "🚀🚀🚀 --------------------------------------------------------------------------------🚀🚀🚀")
            # logging.info("%s %r", "🚀🚀🚀 ~ main.py:22 ~ Solution ~ minEatingSpeed ~ middle:", middle)
            # logging.info("%s", "🚀🚀🚀 --------------------------------------------------------------------------------🚀🚀🚀")

            total_count = 0
            for pile in piles:
                total_count+= -(-pile // middle)

            # logging.info("%s", "🚀🚀🚀 ------------------------------------------------------------------------------------------🚀🚀🚀")
            # logging.info("%s %r", "🚀🚀🚀 ~ main.py:23 ~ Solution ~ minEatingSpeed ~ total_count:", total_count)
            # logging.info("%s", "🚀🚀🚀 ------------------------------------------------------------------------------------------🚀🚀🚀")

            if total_count <= h:
                result = min(result, middle)
                right = middle - 1
            else:
                left = middle + 1

        return result
        
if __name__ == '__main__':
    s = Solution()
    s.minEatingSpeed([30,11,23,4,20], 5)
    logging.info("%s", "🚀🚀🚀 ----------------------------------------------------------------------------------------------------------------🚀🚀🚀")
    logging.info("%s %r", "🚀🚀🚀 ~ main.py:42 ~ s.minEatingSpeed([30,11,23,4,20], 5):", s.minEatingSpeed([30,11,23,4,20], 5))
    logging.info("%s", "🚀🚀🚀 ----------------------------------------------------------------------------------------------------------------🚀🚀🚀")
