namespace KienMac
{
    public class RecentCounter
    {
        private List<int> records;
        private int start;
        public RecentCounter()
        {
            records = new List<int>();
            start = 0;

        }

        public int Ping(int t)
        {
           while (start < records.Count && records[start] < t - 3000)
            {
                // Increment the start pointer to remove the unnecessary records
                start++;
            }
            records.Add(t);
            return records.Count - start;
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            RecentCounter obj = new RecentCounter();
            int param_1 = obj.Ping(1);
            int param_2 = obj.Ping(100);
            int param_3 = obj.Ping(3001);
            int param_4 = obj.Ping(3002);
            //Console.WriteLine(param_);
        }
    }

    /**
     * Your RecentCounter object will be instantiated and called as such:
     * RecentCounter obj = new RecentCounter();
     * int param_1 = obj.Ping(t);
     */
}