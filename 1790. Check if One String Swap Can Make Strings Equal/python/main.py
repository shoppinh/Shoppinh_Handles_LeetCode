class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        difference_counter = 0
        i, j = -1, -1
        for index, (s1_el, s2_el) in enumerate(zip(s1, s2)):
            if s1_el != s2_el:
                difference_counter += 1
                if i == -1:
                    i = index
                elif j == -1:
                    j = index
                if difference_counter > 2:
                    return False
        return difference_counter == 0 or (difference_counter == 2 and s1[i] == s2[j] and s1[j] == s2[i])