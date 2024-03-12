class Solution(object):
    def maxFrequencyElements(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # Count the frequency of each element
        count = {}
        for num in nums:
            count[num] = count.get(num, 0) + 1
        # Find the maximum frequency
        max_freq = max(count.values())
        
        print(count)
        # Count sum of elements with maximum frequency
        return sum([freq for num,freq  in count.items() if freq == max_freq])
        
if __name__ == "__main__":
    s = Solution()
    print(s.maxFrequencyElements([1,2,2,3,1,4]))