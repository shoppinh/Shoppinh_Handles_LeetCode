# Given a list of 24-hour clock time points in "HH:MM" format, 
# return the minimum minutes difference between any two time-points in the list.

# Example 1:

# Input: timePoints = ["23:59","00:00"]
# Output: 1
# Example 2:

# Input: timePoints = ["00:00","23:59","00:00"]
# Output: 0

from typing import List

class Solution:
    def findMinDifference(self, timePoints: List[str]) -> int:
        # Convert time to minutes
        minutes = [int(time[:2]) * 60 + int(time[3:]) for time in timePoints]
        minutes.sort()
        
        # Calculate the minimum difference between consecutive times
        min_diff = float('inf')
        for i in range(1, len(minutes)):
            min_diff = min(min_diff, minutes[i] - minutes[i - 1])
        
        # Handle the wrap-around case [23:59, 00:00]
        # 1440 is the total minutes in a day
        min_diff = min(min_diff, 1440 - minutes[-1] + minutes[0])
        
        return min_diff

if __name__ == '__main__':
    s = Solution()
    print(s.findMinDifference(["23:59","00:00"])) # 1
    