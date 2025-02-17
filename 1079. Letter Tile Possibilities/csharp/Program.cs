using System;
using System.Collections.Generic;
using System.Linq;

public class LetterTilePossibilities
{
    public int NumTilePossibilities(string tiles)
    {
        int count = 0;
        Dictionary<char, int> tileCounts = new Dictionary<char, int>();

        foreach (char tile in tiles)
        {
            tileCounts.TryGetValue(tile, out int currentCount);
            tileCounts[tile] = currentCount + 1;
        }

        void Backtrack(string currentSet)
        {
            if (currentSet.Length > 0)
            {
                count++;
            }

            foreach (var kvp in tileCounts)
            {
                char character = kvp.Key;
                int charCount = kvp.Value;

                if (charCount > 0)
                {
                    currentSet += character;
                    tileCounts[character]--;
                    Backtrack(currentSet);
                    tileCounts[character]++; // Backtrack: Increment count
                    currentSet = currentSet.Substring(0, currentSet.Length - 1); // Backtrack: Remove from set
                }
            }
        }

        Backtrack("");
        return count;
    }


    public static void Main(string[] args)
    {
        LetterTilePossibilities ltp = new LetterTilePossibilities();

        string tiles1 = "AAB";
        int result1 = ltp.NumTilePossibilities(tiles1);
        Console.WriteLine(result1); // Output: 8

        string tiles2 = "AAABBC";
        int result2 = ltp.NumTilePossibilities(tiles2);
        Console.WriteLine(result2); // Output: 188

        string tiles3 = "V";
        int result3 = ltp.NumTilePossibilities(tiles3);
        Console.WriteLine(result3); // Output: 1
    }
}