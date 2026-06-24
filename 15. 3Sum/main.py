from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result: List[List[int]] = []
        for i in range(len(nums)):
            if i>0 and nums[i] == nums[i-1]:
                continue
            # The left pointer should start after i, not at i.
            left = i
            right = len(nums)-1

            while left < right:
                temp_sum = nums[i] + nums[left] + nums[right]
                if temp_sum == 0:
                    result.append([nums[i], nums[left], nums[right]])
                    left+=1
                    right-=1

                    # Remove duplicated both left and right
                    while left < right and nums[left] == nums[left-1]:
                        left+=1
                    while left < right and nums[right] == nums[right+1]:
                        right-=1

                elif temp_sum < 0:
                    left+=1
                else:
                    right-=1

        return result

if __name__ == '__main__':
    s = Solution()
    s.threeSum([-1,0,1,2,-1,-4])
