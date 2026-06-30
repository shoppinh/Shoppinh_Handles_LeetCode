from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq :dict[int,int] = {}
        result: List[int] = []
        for num in nums:
            freq[num] = freq.get(num,0) + 1
        buckets: List[List[int]] = [[] for _i in range(len(nums)+1)]

# Use bucket sort over normal sort, improve from ON*log(N) -> O(N)
        for key in freq:
            buckets[freq[key]].append(key)

        for i in range(len(buckets) -1, 0, -1):
            for num in buckets[i]:
                result.append(num)
                if len(result) == k:
                    return result

        return result




if __name__ == "__main__":
    s = Solution()
    s.topKFrequent([1,1,1,2,2,3,4], 2)


