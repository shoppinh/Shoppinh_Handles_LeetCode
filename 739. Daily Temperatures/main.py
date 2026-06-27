from typing import List


class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        answers = len(temperatures) * [0]
        stack:List[int] = []
        for i in range(len(temperatures)):
            while len(stack) >0:
                if temperatures[i] > temperatures[stack[-1]]:
                    top = stack.pop()
                    answers[top] = i - top
                else:
                    break
            stack.append(i)

        return answers

if __name__ == "__main__":
    s = Solution()
    s.dailyTemperatures([73,74,75,71,69,76])

    print("🚀 ----------------------------------------------------------------------------------------------🚀")
    print("🚀 ~ main.py:23 ~ s.dailyTemperatures([73,74,75,71,69,76]):", s.dailyTemperatures([73,74,75,71,69,76]))
    print("🚀 ----------------------------------------------------------------------------------------------🚀")

