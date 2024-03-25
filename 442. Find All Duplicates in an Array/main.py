class Solution(object):
    def findDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = []
        duplication_check_map = {}
        for i in nums:
            duplication_check_map[i] = duplication_check_map.get(i,0) + 1

        for key, value in duplication_check_map.items():
            if (value ==2):
                result.append(key)

        return result
    
if __name__ == '__main__':
    s = Solution()
    print(s.findDuplicates([1,2,3,2,1,3,4,5,6,7,8]))