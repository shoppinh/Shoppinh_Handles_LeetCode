/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

public class Solution : GuessGame
{
    public int GuessNumber(int n)
    {
        var low = 1;
        var hight = n;
        while (low <= high)
        {
            var middle = low + Math.floor((high - low) / 2);
            var guess = guess(middle);
            if (guess == 1)
            {
                low = middle + 1;
            }
            else if (guess == -1)
            {
                hight = middle - 1
            }
            else
            {
                return middle
            }
        }

    }
}