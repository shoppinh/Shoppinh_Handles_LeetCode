public class Solution
{
    public bool IsValid(string s)
    {
        var parenthesisStack = new Stack<char>();
        var parenthesisMap = new Dictionary<char, char>()
        {
            { '(', ')' },
            { '[', ']' },
            { '{', '}' }
        };
        foreach (var c in s)
        {
            if (parenthesisMap.ContainsKey(c))
            {
                parenthesisStack.Push(c);
            }
            else if (parenthesisStack.Count == 0 || parenthesisMap[parenthesisStack.Pop()] != c)
            {
                return false;
            }
        }
        return parenthesisStack.Count == 0;
    }
}
