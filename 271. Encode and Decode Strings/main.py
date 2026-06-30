from typing import List


class Solution:

    def encode(self, strs: List[str]) -> str:
        # Store the length of the str item, separate by "#"
        result = ""
        for sub_str in strs:
            result = result + str(len(sub_str))+"#"+sub_str
        return result

    def decode(self, s: str) -> List[str]:
        result: List[str] = []
        curr_num = ""
        i = 0
        while i < len(s):
            if s[i] != '#':
                curr_num += s[i]
                i+=1
            else:
                result.append(s[i+1:i+1+int(curr_num)])
                i = i+int(curr_num)+1
                curr_num = ''

        return result


if __name__ == "__main__":
    s = Solution()
    s.decode(s.encode(["Hello","World"]))

    print("🚀 ----------------------------------------------------------------------------------------🚀")
    print('🚀 ~ main.py:30 ~ s.decode(s.encode(["Hello","World"])):', s.decode(s.encode(["Hello","World"])))
    print("🚀 ----------------------------------------------------------------------------------------🚀")





