class Solution(object):
    def sortedSquares(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        sorted_with_abs =  sorted(nums, key=lambda x: abs(x))
        for i in sorted_with_abs:
            sorted_with_abs[i] = sorted_with_abs[i] ** 2
        return sorted_with_abs
    
if __name__ == '__main__':
    s = Solution()
    print(s.sortedSquares([-4,-1,0,3,10]))
    print(s.sortedSquares([-7,-3,2,3,11]))