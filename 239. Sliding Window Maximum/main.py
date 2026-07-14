class Solution:
    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:
        result: list[int] = []
        right: int = 0
        deque: list[int] = []
        # Store indices of the deque
        while right < len(nums):
            if deque:
                # We have to make sure that the deque is not empty

                # Evict the out-of-bound elements
                if deque[0] < right - k + 1:
                    _ = deque.pop(0)

                # Make sure the deque is decreasing order
                while deque and nums[deque[-1]] < nums[right]:
                    _ = deque.pop()

            deque.append(right)
            if right >= k - 1:
                result.append(nums[deque[0]])
            right += 1
        return result

if __name__ == '__main__':
    s = Solution()
    s.maxSlidingWindow([1], 1)
