class Solution(object):
    def maximumOddBinaryNumber(self, s):
        """
        :type s: str
        :rtype: str
        """
        binary_dict = {
            "1": 0,
            "0": 0
        }
        for i in range(len(s)):
            if s[i] == '1':
                binary_dict["1"] = binary_dict["1"] + 1
            else:
                binary_dict["0"] = binary_dict["0"] + 1
        return "1" * (binary_dict["1"] -1) + "0" * binary_dict["0"] + "1"
        
if __name__ == '__main__':
    s = Solution()
    print(s.maximumOddBinaryNumber("010"))
    print(s.maximumOddBinaryNumber("0101"))