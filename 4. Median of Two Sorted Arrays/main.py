from typing import List
import math
import logging

logging.basicConfig(level=logging.DEBUG, format="%(message)s")
# Insight: Instead of searching for the median directly, binary search the partition in the smaller array
# so that the left partitions contain exactly half of the total elements (or one extra if the total is odd).
# A valid partition satisfies Aleft <= Bright and Bleft <= Aright, ensuring every element in the left partition is ≤ every element in the right.

# Key: If Aleft > Bright, move the partition in A left (right = i - 1); if Bleft > Aright,
# move it right (left = i + 1). Once the partition is valid, compute the median from the boundary values: max(Aleft, Bleft) (odd) or (max(Aleft, Bleft) + min(Aright, Bright)) / 2 (even).

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        A, B = (nums2, nums1) if len(nums1) > len(nums2) else (nums1, nums2)
        left = 0
        right = len(A)
        goal_length = math.ceil((len(A) + len(B)) / 2)
        result = 0

        while left <= right:
            i = (right + left) // 2
            j = goal_length - i
            a_left = A[i - 1] if i > 0 else float(-math.inf)
            a_right = A[i] if len(A) and i < len(A) else float(math.inf)
            b_left = B[j - 1] if j > 0 else float(-math.inf)
            b_right = B[j] if len(B) and j < len(B) else float(math.inf)

            if a_left < b_right and b_left <= a_right:
                result = (
                    max(a_left, b_left)
                    if (len(A) + len(B)) % 2 == 1
                    else (max(a_left, b_left) + min(a_right, b_right)) / 2
                )
                break
            elif a_left > b_right:
                right = i - 1

            else:
                left = i + 1

        return result


if __name__ == "__main__":
    s = Solution()
    logging.info(
        "%s",
        "🚀🚀🚀 ------------------------------------------------------------------------------------🚀🚀🚀",
    )
    logging.info(
        "%s %r",
        "🚀🚀🚀 ~ main.py:42 ~ findMedianSortedArrays:",
        s.findMedianSortedArrays([1], [1]),
    )
    logging.info(
        "%s",
        "🚀🚀🚀 ------------------------------------------------------------------------------------🚀🚀🚀",
    )
