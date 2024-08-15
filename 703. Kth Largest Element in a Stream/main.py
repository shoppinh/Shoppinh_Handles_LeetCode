import heapq
from typing import List


class KthLargest:
    # Use binary search to find the position that number would be in the sorted array
    def binary_search_insert_position(self, array, number):
        left, right = 0, len(array) -1
        
        while left <= right:
            mid = (left + right) // 2
            if array[mid] < number:
                left = mid + 1
            elif array[mid] == number:
                return mid
            else:
                right = mid -1 
        
        return left 

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        nums.sort()
        self.nums = nums
        

    def add(self, val: int) -> int:
        # Find the correct position using binary search
        position = self.binary_search_insert_position(self.nums, val)
        # Insert the number at the correct position
        self.nums.insert(position, val)
        return self.nums[-self.k]
    
    
    # Heap approach
    
    def __init__(self, k, nums):
        self.k = k
        self.nums = nums
        heapq.heapify(self.nums)  # Convert nums into a heap
        # If the heap is larger than k, remove the smallest elements until it has exactly k elements
        while len(self.nums) > k:
            heapq.heappop(self.nums)

    def add(self, val):
        heapq.heappush(self.nums, val)
        # If after adding the new value, the heap has more than k elements, pop the smallest
        if len(self.nums) > self.k:
            heapq.heappop(self.nums)
        # The smallest element in the heap is now the k-th largest element
        return self.nums[0]

        


# Your KthLargest object will be instantiated and called as such:
if __name__ == "__main__":
    obj = KthLargest(3, [4,5,8,2])
    param_1 = obj.add(3)
    print(param_1)