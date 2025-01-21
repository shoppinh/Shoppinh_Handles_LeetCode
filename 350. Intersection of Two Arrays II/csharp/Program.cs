namespace KienMac
{
    public class Solution
    {
        public int[] Intersect(int[] nums1, int[] nums2)
        {
            //using dictionary time-complex: n + m , space-complex: n + k
            //var dict1 = new Dictionary<int, int>();
            //var result = new List<int>();

            //foreach (var num in nums1)
            //{
            //    if (!dict1.TryAdd(num, 1))
            //    {
            //        dict1[num]++;
            //    }
            //}

            //foreach (var num in nums2)
            //{
            //    if (!dict1.TryGetValue(num, out var count) || count <= 0) continue;
            //    result.Add(num);
            //    dict1[num]--;
            //}

            //return result.ToArray();

            //sorting time-complex: nlogn + mlogm , space-complex: n + m +k
            Array.Sort(nums1);
            Array.Sort(nums2);
            var result = new List<int>();

            var i = 0;
            var j = 0;

            while (i < nums1.Length && j < nums2.Length)
            {
                if (nums1[i] == nums2[j])
                {
                    result.Add(nums1[i]);
                    i++;
                    j++;
                }
                else if (nums1[i] < nums2[j])
                {
                    i++;
                }
                else
                {
                    j++;
                }
            }

            return result.ToArray();
        }


    }

    static class Program
    {
        static void Main(string[] args)
        {
            var solution = new Solution();
            var nums1 = new int[] { 1, 2, 2, 1 };
            var nums2 = new int[] { 2, 2 };
            var result = solution.Intersect(nums1, nums2);
            foreach (var item in result)
            {
                Console.WriteLine(item);
            }
        }
    }
}