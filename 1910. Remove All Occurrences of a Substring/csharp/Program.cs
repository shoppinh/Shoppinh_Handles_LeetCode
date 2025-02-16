public class Solution {
    public string RemoveOccurrences(string s, string part) {
        if (s.Length < part.Length) {
            return s;
        }
        int startP = 0;
        int endP = part.Length - 1;

        while (endP < s.Length) {
            string substr = s.Substring(startP, part.Length);
            if (substr == part) {
                s = s.Substring(0, startP) + s.Substring(endP + 1, s.Length - endP - 1);
                startP = Math.Max(0, startP - part.Length);
                endP = Math.Max(part.Length - 1, endP - part.Length);
            } else {
                startP++;
                endP++;
            }
        }
        return s;
    }

    // Using built-in
    public string RemoveOccurrences(string s, string part) {
        StringBuilder sb = new StringBuilder(s);
        int partLength = part.Length;
        
        while (true) {
            int index = sb.ToString().IndexOf(part);
            if (index == -1) break;
            sb.Remove(index, partLength);
        }
        
        return sb.ToString();
    }
}