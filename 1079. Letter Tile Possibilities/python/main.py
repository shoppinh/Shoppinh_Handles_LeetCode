from collections import Counter

class Solution:
    def numTilePossibilities(self, tiles):
        count = 0
        tile_counts = Counter(tiles)

        def backtrack(current_set):
            nonlocal count  # To modify the outer count variable
            if current_set:  # Non-empty set
                count += 1

            for char, char_count in tile_counts.items():
                if char_count > 0:
                    current_set += char  # Add to set
                    tile_counts[char] -= 1  # Decrement count
                    backtrack(current_set)  # Explore further
                    tile_counts[char] += 1  # Backtrack: Increment count
                    current_set = current_set[:-1]  # Backtrack: Remove from set

        backtrack("")  # Start with an empty set
        return count


if __name__=="__main__":
    tiles = "AAB"
    s = Solution()
    result = s.numTilePossibilities(tiles)
    print(result)