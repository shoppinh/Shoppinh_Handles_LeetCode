using System;

class Program
{
    static void Main()
    {
        string s1 = "abcd", s2 = "badc";
        Console.WriteLine(CheckIfOneStringSwapCanMakeStringsEqual(s1, s2));
    }

    static bool CheckIfOneStringSwapCanMakeStringsEqual(string s1, string s2)
    {
        if (s1.Length != s2.Length)
            return false;

        int diffCount = 0;
        int[] diffIndexes = new int[2];

        for (int i = 0; i < s1.Length; i++)
        {
            if (s1[i] != s2[i])
            {
                if (diffCount == 2)
                    return false;

                diffIndexes[diffCount++] = i;
            }
        }

        return diffCount == 0 || (diffCount == 2 && s1[diffIndexes[0]] == s2[diffIndexes[1]] && s1[diffIndexes[1]] == s2[diffIndexes[0]]);
    }
}
