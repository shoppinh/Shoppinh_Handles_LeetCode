# You are given m arrays, where each array is sorted in ascending order.

# You can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a - b|.

# Return the maximum distance.

 

# Example 1:

# Input: arrays = [[1,2,3],[4,5],[1,2,3]]
# Output: 4
# Explanation: One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
# Example 2:

# Input: arrays = [[1],[1]]
# Output: 0


from typing import List


class Solution:
    def maxDistance(self, arrays: List[List[int]]) -> int:
        # Original Approach
        results = []
        for arr in arrays:
            results.append([arr[0], arr[-1]])
        smallest = results[0][0]
        biggest = results[0][1]
        maxDistance = 0
        for i in range(1,len(results)):                
           maxDistance = max(maxDistance, abs(results[i][1] - smallest), abs(biggest- results[i][0]))
           smallest = min(smallest, results[i][0])
           biggest = max(biggest, results[i][1])
                        
        # Return the maximum distance
        return maxDistance
    
    # Improved Approach
    def maxDistance2(self, arrays: List[List[int]]) -> int:
        # Original Approach
        smallest = arrays[0][0]
        biggest = arrays[0][-1]
        maxDistance = 0
        for i in range(1,len(arrays)):                
           maxDistance = max(maxDistance, abs(arrays[i][-1] - smallest), abs(biggest- arrays[i][0]))
           smallest = min(smallest, arrays[i][0])
           biggest = max(biggest, arrays[i][-1])
                        
        # Return the maximum distance
        return maxDistance
    

        
    
    
if __name__ == '__main__':
    s = Solution()
    print(s.maxDistance([ [3,4],[1,5],]))