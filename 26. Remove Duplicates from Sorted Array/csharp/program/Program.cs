namespace Program
{
    public class Solution
    {
        public int RemoveDuplicates(int[] nums)
        {
            if (nums.Length == 0) return 0; // Handle empty array case

            int uniqueCount = 1; // Start with the first element as unique
            for (int i = 1; i < nums.Length; i++)
            {
                if (nums[i] != nums[uniqueCount - 1]) // Compare with the last unique element
                {
                    nums[uniqueCount] = nums[i]; // Update the array in place
                    uniqueCount++; // Increment the count of unique elements
                }
            }

            return uniqueCount;
        }
    }
    static class Program
    {
        static void Main(string[] args)
        {
            var s = new Solution();
            Console.WriteLine(s.RemoveDuplicates([1, 1, 2, 2, 3, 3]));

        }
    }

}

