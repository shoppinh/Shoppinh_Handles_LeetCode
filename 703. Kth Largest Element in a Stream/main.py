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


# Your KthLargest object will be instantiated and called as such:
if __name__ == "__main__":
    obj = KthLargest(3, [4,5,8,2])
    param_1 = obj.add(3)
    print(param_1)