public class Solution {
    public string ClearDigits(string s) {
        Stack<char> stack = new Stack<char>();
        foreach (char c in s)
        {
            if (char.IsDigit(c))
            {
                if (stack.Count > 0)
                {
                    stack.Pop();
                }
            }
            else
            {
                stack.Push(c);
            }
        }
        return new string(stack.Reverse().ToArray());
        
    }
}