public class Solution
{
    public int MaxAscendingSum(int[] nums)
    {
        if (nums.Count <= 0)
        {
            return 0
        }
        var result = nums[0];
        var tempSum = nums[0];
        for (int index = 1; index < nums.Length; index++)
        {
            if (nums[index] <= nums[index - 1])
            {
                result = Math.Max(result, tempSum);
                tempSum = nums[index];
            }
            else
            {
                tempSum += nums[index];
            }
        }
        return Math.Max(result, tempSum);

    }
}