from collections import defaultdict
from typing import List


class Solution:

    # Approach 1: Brute-force
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False

        hash_map: dict[str, int] = {}
        hash_map2: dict[str, int] = {}
        for c in s:
            hash_map[c] = hash_map.get(c, 0) + 1
        for c in t:
            hash_map2[c] = hash_map2.get(c, 0) + 1

        return hash_map == hash_map2

    # Approach 2: Use sorted string as hash map's key (sorting causes k*log(k))
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans: dict[str, List[str]] = {}
        for word in strs:
            sorted_str = "".join(sorted(word))
            if sorted_str in ans:
                ans[sorted_str].append(word)
            else:
                ans[sorted_str] = [word]

        return list(ans.values())

    # Approach 3: Count the frequency of each char in the str, use it as hash map's key
    def groupAnagrams2(self, strs: List[str]) -> List[List[str]]:
        ans: defaultdict[tuple[int, ...], List[str]] = defaultdict(list)
        for word in strs:
            count = [0]*26
            for c in word:
                count[ord(c) - ord('a')] +=1

            key = tuple(count)
            ans[key].append(word)

        return list(ans.values())
