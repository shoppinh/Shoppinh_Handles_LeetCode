# Longest Substring Without Repeating Characters (LeetCode 3)

Given a string `s`, find the length of the longest substring without duplicate characters.

## Examples

**Example 1**

Input:
```text
s = "abcabcbb"
```
Output: `3`
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

**Example 2**

Input:
```text
s = "bbbbb"
```
Output: `1`
Explanation: The answer is "b", with the length of 1.

**Example 3**

Input:
```text
s = "pwwkew"
```
Output: `3`
Explanation: The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

## Constraints

- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces.
