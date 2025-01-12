namespace ThirdMaximumNumber
{
    class Solution
    {
        // First solution nlogn
        public int ThirdMax(int[] nums)
        {
            var sortedNums = new SortedDictionary<int, int>();
            foreach (var num in nums)
            {
                sortedNums.TryAdd(num, 1);
            }

            return sortedNums.Count < 3 ? sortedNums.Keys.Max() : sortedNums.Keys.ElementAt(sortedNums.Count - 3);
        }

        // Second solution

        public int ThirdMax2(int[] nums)
        {
            int? max1 = null;
            int? max2 = null;
            int? max3 = null;
            foreach (var num in nums)
            {
                if (num.Equals(max1) || num.Equals(max2) || num.Equals(max3)) continue;
                if (max1 == null || num > max1)
                {
                    max3 = max2;
                    max2 = max1;
                    max1 = num;

                }
                else if (max2 == null || num > max2)
                {
                    max3 = max2;
                    max2 = num;

                }
                else if (max3 == null || num > max3)
                {
                    max3 = num;
                }
            }
            return max3.GetValueOrDefault(max1.GetValueOrDefault(int.MinValue));
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var s = new Solution();
            Console.WriteLine(s.ThirdMax2([1, 2])); // 6
            Console.WriteLine(s.ThirdMax([1, 2])); // 6
        }
    }
}