using System.Security.Cryptography.X509Certificates;

namespace KienMac
{
    public class Solution
    {
        //public string Build(string s)
        //{
        //    Stack<char> stack = new Stack<char>();
        //    for (int i = 0; i < s.Length; i++)
        //    {
        //        if (s[i] == '#')
        //        {
        //            if (stack.Count > 0)
        //            {
        //                stack.Pop();
        //            }
        //        }
        //        else
        //        {
        //            stack.Push(s[i]);
        //        }
        //    }
        //    return new string(stack.ToArray());
        //}
        public bool BackspaceCompare(string s, string t)
        {

            // using string builder
            //for (int i = 0; i < s.Length; i++)
            //{
            //    if (s[i] == '#')
            //    {
            //        if (i > 0)
            //        {
            //            s = s.Remove(i - 1, 2);
            //            i -= 2;
            //        }
            //        else
            //        {
            //            s = s.Remove(i, 1);
            //            i--;
            //        }
            //    }
            //}

            //for (int i = 0; i < t.Length; i++)
            //{
            //    if (t[i] == '#')
            //    {
            //        if (i > 0)
            //        {
            //            t = t.Remove(i - 1, 2);
            //            i -= 2;
            //        }
            //        else
            //        {
            //            t = t.Remove(i, 1);
            //            i--;
            //        }
            //    }
            //}

            //return s == t;

            // using stack

            //return Build(s) == Build(t);

            // using two pointer
            int i = s.Length - 1;
            int j = t.Length - 1;
            int skipS = 0;
            int skipT = 0;

            while (i >= 0 && j >= 0)
            {
                while (i >= 0)
                {
                    if (s[i] == '#')
                    {
                        skipS++;
                        i--;
                    }
                    else if (skipS > 0)
                    {
                        skipS--;
                        i--;
                    }
                    else
                    {
                        break;
                    }
                }

                while (j >= 0)
                {
                    if (t[j] == '#')
                    {
                        skipT++;
                        j--;
                    }
                    else if (skipT > 0)
                    {
                        skipT--;
                        j--;
                    }
                    else
                    {
                        break;
                    }
                }

                if (i >= 0 && j >= 0 && s[i] != t[j])
                {
                    return false;
                }

                if ((i>=0) != (j>=0))
                {
                    return false;
                }

                i--;
                j--;

                
            }
            return true;

        }
    }

    public class Program
    {
        public static void Main()
        {
            Solution sol = new Solution();
            string s = "ab#c";
            string t = "ad#c";
            bool result = sol.BackspaceCompare(s, t);
            System.Console.WriteLine(result);
        }
    }
}