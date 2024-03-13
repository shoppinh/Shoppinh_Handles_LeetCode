import math
class Solution(object):
    def pivotInteger(self, n):
        """
        :type n: int
        :rtype: int
        """
        frac,whole = math.modf(math.sqrt((n**2+n)/2))
        
        return -1 if frac > 0 else int(whole)
    
if __name__ == "__main__":
    s = Solution()
    print(s.pivotInteger(8))