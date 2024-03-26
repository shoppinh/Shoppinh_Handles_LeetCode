class Solution(object):
    def firstMissingPositive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # Approach 1: Brute force
        # result = 1
        # result_dict = {}
        # for i in nums:
        #     result_dict[i] = result_dict.get(i,1)

        # print(result_dict)
        
        # while True:
        #     if result_dict.get(result) > 0:
        #         result = result + 1
        #     else:
        #         break

        # return result
        
        # Approach 2: Boolean array
        # There are two cases about this problem
        # Case 1: Nums contains element from 1 to n => first int missing = n + 1
        # Case 2: Nums does not contain element from 1 to n => return first int missing
        
        n = len(nums)
        seen = [False] * (n + 1)  # Array for lookup

        # Mark the elements from nums in the lookup array
        for num in nums:
            if 0 < num <= n:
                seen[num] = True

        # Iterate through integers 1 to n
        # return smallest missing positive integer
        for i in range(1, n + 1):
            if not seen[i]:
                return i

        # If seen contains all elements 1 to n
        # the smallest missing positive number is n + 1
        return n + 1