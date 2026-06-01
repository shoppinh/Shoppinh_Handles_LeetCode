# Two Sum

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input contains exactly one solution, and you may not use the same element twice.

Return the answer in any order.

## Examples

**Example 1**

Input:
```txt
nums = [2, 7, 11, 15]
target = 9
```

Output:
```txt
[0, 1]
```

Explanation: `nums[0] + nums[1] == 9`, so we return `[0, 1]`.

**Example 2**

Input:
```txt
nums = [3, 2, 4]
target = 6
```

Output:
```txt
[1, 2]
```

**Example 3**

Input:
```txt
nums = [3, 3]
target = 6
```

Output:
```txt
[0, 1]
```

## Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Exactly one valid answer exists.