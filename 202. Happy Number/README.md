# Happy Number (LeetCode 202)

Write an algorithm to determine if a number `n` is happy.

## Definition

A happy number is defined by the following process:

- Start with any positive integer.
- Replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals `1` (where it will stay), or it loops endlessly in a cycle which does not include `1`.

Those numbers for which this process ends in `1` are happy. Return `true` if `n` is a happy number, and `false` otherwise.

## Examples

**Example 1**

Input:
```text
n = 19
```

Output: `true`

Explanation:

$1^2 + 9^2 = 82$

$8^2 + 2^2 = 68$

$6^2 + 8^2 = 100$

$1^2 + 0^2 + 0^2 = 1$

**Example 2**

Input:
```text
n = 2
```

Output: `false`

## Constraints

- `1 <= n <= 2^31 - 1`

## Notes & Hints

- Use a hash set to detect cycles (if a value repeats, the sequence is in a loop and will never reach `1`).
- Alternatively, use Floyd's cycle detection algorithm (tortoise and hare) on the sequence of sums to detect cycles with O(1) extra space.

## See also
- Implementations typically compute the next value by summing the squares of digits using repeated division/modulo or by converting to string and iterating digits.