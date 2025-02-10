**Problem Statement**

You are given a string `s`.

**Task**

Your task is to remove all digits from the string `s` by repeatedly applying the following operation:

* Delete the first digit and the closest non-digit character to its left.
* Return the resulting string after removing all digits.

**Examples**

**Example 1**

Input: `s = "abc"`

Output: `"abc"`

Explanation:

There is no digit in the string.

**Example 2**

Input: `s = "cb34"`

Output: `""`

Explanation:

First, we apply the operation on `s[2]`, and `s` becomes `"c4"`.

Then we apply the operation on `s[1]`, and `s` becomes `""`.

**Constraints**

* `1 <= s.length <= 100`
* `s` consists only of lowercase English letters and digits.
* The input is generated such that it is possible to delete all digits.