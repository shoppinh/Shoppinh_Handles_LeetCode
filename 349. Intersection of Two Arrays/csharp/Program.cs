namespace KienMac
{
    public class Solution
    {
        public int[] Intersection(int[] nums1, int[] nums2)
        {
            // Using built-in function
            //return nums1.Intersect(nums2).ToArray();

            // Using HashSet
            //var set1 = new HashSet<int>(nums1);
            //var set2 = new HashSet<int>(nums2);
            //var result = new List<int>();
            //foreach (var item in set2)
            //{
            //    if (set1.Contains(item))
            //    {
            //        result.Add(item);
            //    }
            //}
            //return result.ToArray();

            // Using Dictionary
            var result = new List<int>();
            var map = new Dictionary<int, int>();
            foreach (var item in nums1)
            {
                map.TryAdd(item, 1);
            }

            foreach (var item in nums2)
            {
                if (map.ContainsKey(item))
                {
                    result.Add(item);
                    map.Remove(item);
                }
            }
            return result.ToArray();



        }


    }

    static class Program
    {
        static void Main(string[] args)
        {
            var s = new Solution();

            foreach (var variable in s.Intersection([1, 2, 3], [3, 4, 5]))
            {
                Console.WriteLine("Result {0}", variable);
            }
        }
    }


}