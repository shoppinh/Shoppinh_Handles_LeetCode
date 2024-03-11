class Solution(object):
    def customSortString(self, order, s):
        """
        :type order: str
        :type s: str
        :rtype: str
        """
        #Method 1
        # Create a dictionary to store the position of each character in order
        char_position = {char: i for i, char in enumerate(order)}

        # Sort the characters in s based on custom order, if the character is not in order, put it at the end
        sorted_s = sorted(s, key=lambda char: char_position.get(char, len(order)))

        # Convert the sorted list back to a string
        return ''.join(sorted_s)
            
if __name__ == "__main__":
    s = Solution()
    print(s.customSortString("cba", "abcd")) # Output: "cbad"