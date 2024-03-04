class Solution(object):
    def bagOfTokensScore(self, tokens, power):
        """
        :type tokens: List[int]
        :type power: int
        :rtype: int
        """
        sorted_list = sorted(tokens)
        max_score = 0
        current_score = 0
        # Using two pointers to iterate through the list
        # Strategy: If we have enough power, we can play the smallest card to gain a point. Otherwise, we can play the largest card to gain power.
        left = 0
        right = len(sorted_list) - 1
        while left <= right:
            # If we have enough power, we can play the smallest card to gain a point
            if sorted_list[left] <= power:
                power -= sorted_list[left]
                left += 1
                current_score += 1
                max_score = max(max_score, current_score)
            # If we don't have enough power, we can play the largest card to gain power
            elif current_score > 0:
                power += sorted_list[right]
                right -= 1
                current_score -= 1
            else:
                break
        return max_score
    
if __name__ == "__main__":
    s = Solution()
    print(s.bagOfTokensScore([100,200,300,400], 200))