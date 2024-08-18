# An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

# Given an integer n, return the nth ugly number.

 

# Example 1:

# Input: n = 10
# Output: 12
# Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
# Example 2:

# Input: n = 1
# Output: 1
# Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

from heapq import heappop, heappush


class Solution:
    
    # DP approach
    def nthUglyNumber(self, n: int) -> int:
        uglyNums = []
        uglyNums.append(1)
        i2, i3, i5 = 0, 0, 0
        while len(uglyNums) < n:
            nextUgly = min(uglyNums[i2]*2, uglyNums[i3]*3, uglyNums[i5]*5)
            uglyNums.append(nextUgly)
            if nextUgly == uglyNums[i2]*2:
                i2 += 1
            if nextUgly == uglyNums[i3]*3:
                i3 += 1
            if nextUgly == uglyNums[i5]*5:
                i5 += 1
        return uglyNums[-1]
    
    # Heap approach
    # The idea is to multiply each of prime numbers with their corresponding numbers. 
    # For example, we pop the "2" element and multiply each with primes then push in the heap
    # Also, we use a visited map to check for circular references
    def nthUglyNumber2(self, n):
        primes = [2,3,5]
        uglyHeap = [1]
        visited = set()
        visited.add(1)
        for _ in range(n):
            # Get the first item and and multiply each with primes then push in the heap
            curr = heappop(uglyHeap)
            for prime in primes:
                new_ugly = curr * prime
                if new_ugly not in visited:
                    heappush(uglyHeap, new_ugly)
                    visited.add(new_ugly)
        # The first element will be the resutl
        return curr

if __name__ == '__main__':
    s = Solution()
    print(s.nthUglyNumber2(10))
