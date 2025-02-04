from typing import List
class Solution:
    def max_ascending_sum(self, nums: List[int]) -> int:
        if len(nums) ==0:
            return 0
        result = nums[0]
        temp_sum = nums[0]
        for i in range(1,len(nums)):
            if nums[i] <= nums[i-1]:
                result = max(result,temp_sum)
                temp_sum = nums[i]
            else:
                temp_sum+= nums[i]
                            
        return max(temp_sum,result)
    
    
if __name__ == "__main__":
    s = Solution()
    print(s.max_ascending_sum([10,20,30,5,10,50]))