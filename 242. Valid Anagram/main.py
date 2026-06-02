class Solution:
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

if __name__ == "__main__":
    s = Solution()
    print(s.isAnagram("anagram", "nagaram"))