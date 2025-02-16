class NumberContainers:

    def __init__(self):
        self.index_to_num = {}  # Maps index to number
        self.num_to_indices = {}  # Maps number to set of indices containing it

    def change(self, index: int, number: int) -> None:
        # If index already has a number, remove it from old number's indices
        if index in self.index_to_num:
            old_num = self.index_to_num[index]
            self.num_to_indices[old_num].remove(index)
            if not self.num_to_indices[old_num]:
                del self.num_to_indices[old_num]
                
        # Add new number
        self.index_to_num[index] = number
        if number not in self.num_to_indices:
            self.num_to_indices[number] = set()
        self.num_to_indices[number].add(index)

    def find(self, number: int) -> int:
        if number not in self.num_to_indices:
            return -1
        return min(self.num_to_indices[number])


# Your NumberContainers object will be instantiated and called as such:
# obj = NumberContainers()
# obj.change(index,number)
# param_2 = obj.find(number)