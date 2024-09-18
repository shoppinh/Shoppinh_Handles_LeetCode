class Solution(object):
    def countSubarrays(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        
        # Sliding window: slide the window through nums array to find subarray which contains exact k max_element
        # max_elements_in_window = frequency of max element in current window
        max_element = max(nums)
        ans = start = max_elements_in_window = 0

        for end in range(len(nums)):
            if nums[end] == max_element:
                max_elements_in_window += 1
            while max_elements_in_window == k:
                if nums[start] == max_element:
                    max_elements_in_window -= 1
                # start is used to count the qualified subarrays
                start += 1
                print("start in the loop 2", start)
            print("start in the loop 1", start)
            ans += start
        return ans
    
if __name__ == '__main__':
    s = Solution()
    s.countSubarrays([1,3,2,3,3], 2)