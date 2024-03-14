class Solution(object):
    def numSubarraysWithSum(self, nums, goal):
        """
        :type nums: List[int]
        :type goal: int
        :rtype: int
        """
        # Approach 1: Brute force not a reasonable approach to big data
        # count = 0
        # for index, num in enumerate(nums):
        #     temp = [num]
        #     sum_arr = temp[:]
        #     if sum(sum_arr) == goal:
        #         count += 1
        #     for j in range(index+1,len(nums)):
        #         sum_arr.append(nums[j])
        #         if sum(sum_arr) == goal:
        #             count += 1
        # return count
        # Approach 2: Prefix sum because of the consecutiveness of subarray
        total_count = 0
        current_sum = 0
        # {prefix: number of occurrence}
        # prefix sum represents the cumulative sum of elements up to a specific point in the array
        freq = {}  # To store the frequency of prefix sums

        for num in nums:
            current_sum += num
            if current_sum == goal:
                total_count += 1
                
            # If current sum surpass the goal
            # check if there is any prefix sum that can be subtracted from the current sum to get the desired goal
            # for example [1,0,1,0,1] sum is 3, the goal is 2, so we have 2 subarray which remove [1] or [1,0] from the beginning
            if current_sum - goal in freq:
                total_count += freq[current_sum - goal]
                
            freq[current_sum] = freq.get(current_sum, 0) + 1
        print(freq)
        return total_count
        # Approach 3: Sliding window
        # start, current_sum, total_count = 0, 0, 0

        # # Iterate through the array using a sliding window approach
        # for end in range(len(nums)):
        #     current_sum += nums[end]

        #     # Adjust the window by moving the start pointer to the right
        #     # until the sum becomes less than or equal to the goal
        #     while start <= end and current_sum > goal:
        #         current_sum -= nums[start]
        #         start += 1

        #     # Update the total count by adding the length of the current subarray
        #     total_count += end - start + 1

        # return total_count
    
if __name__ == "__main__":
    s = Solution()
    print(s.numSubarraysWithSum([1,0,1,0,1], 2))