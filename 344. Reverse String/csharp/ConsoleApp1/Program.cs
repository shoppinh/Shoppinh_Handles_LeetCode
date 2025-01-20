namespace Program
{
    public class Solution
    {
        public void ReverseString(char[] s)
        {
            if (s.Length == 0)
            {
                return;
            }
            // Use for loop
            var len = s.Length;
            for (var i = 0; i < len / 2; i++)
            {
                (s[i], s[len - 1 - i]) = (s[len - 1 - i], s[i]);
            }

            // use built-in function
            Array.Reverse(s);

            // use two pointers
            var left = 0;
            var right = s.Length - 1;
            while (left < right)
            {
                (s[left], s[right]) = (s[right], s[left]);
                left++;
                right--;
            }
        }
    }

    static class Program
    {
        static void Main(string[] args)
        {
            var s = new Solution();

            s.ReverseString(['h', 'e', 'l', 'z', 'o', 'c']);

        }
    }

}