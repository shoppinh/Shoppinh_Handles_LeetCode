public class Solution
{
    public bool Check(int[] nums)
    {
        var count = 0;
        for (var i = 0; i < nums.Length; i++)
        {
            if (nums[i] > nums[(i + 1) % nums.Length])
            {
                count++;
            }

            if (count > 1)
            {
                return false;
            }
        }

        return true;
    }
}