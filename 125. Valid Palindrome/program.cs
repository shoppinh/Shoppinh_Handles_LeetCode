using System;
using System.Text.RegularExpressions;

public class Solution
{
    public bool IsPalindrome(string s)
    {
        s = Regex.Replace(s.ToLower(), "[^a-zA-Z0-9]", "");

        int i = 0;
        while (i < s.Length / 2)
        {
            if (s[i] != s[s.Length - 1 - i])
            {
                return false;
            }

            i++;
        }

        return true;
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        var solution = new Solution();

        Console.WriteLine(
            solution.IsPalindrome("A man, a plan, a canal: Panama")
        ); // True

        Console.WriteLine(
            solution.IsPalindrome("race a car")
        ); // False

        Console.WriteLine(
            solution.IsPalindrome(" ")
        ); // True
    }
}