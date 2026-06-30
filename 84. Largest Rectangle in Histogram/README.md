# 84. Largest Rectangle in Histogram

Given an array of integers `heights`, where each value represents the height of a histogram bar and every bar has width `1`, return the area of the largest rectangle that can be formed inside the histogram.

## Visual Intuition

For `heights = [2,1,5,6,2,3]`, the histogram looks like this:

```text
height
 6 |          #
 5 |       #  #
 4 |       #  #
 3 |       #  #     #
 2 | #     #  #  #  #
 1 | #  #  #  #  #  #
   +-------------------
     0  1  2  3  4  5   index
```

The largest rectangle uses bars at index `2` and `3`.

```text
height
 6 |          #
 5 |       X  X
 4 |       X  X
 3 |       X  X     #
 2 | #     X  X  #  #
 1 | #  #  X  X  #  #
   +-------------------
     0  1  2  3  4  5

Rectangle height = 5
Rectangle width  = 2
Area             = 5 * 2 = 10
```

## Examples

### Example 1

```text
Input:  heights = [2,1,5,6,2,3]
Output: 10
```

Explanation: The largest rectangle has height `5` and spans bars `2..3`, giving area `5 * 2 = 10`.

### Example 2

```text
Input:  heights = [2,4]
Output: 4
```

Explanation: The best rectangle can use the second bar alone with area `4 * 1 = 4`, or both bars with height `2` and width `2`, also giving area `4`.

## Constraints

```text
1 <= heights.length <= 10^5
0 <= heights[i] <= 10^4
```

## Key Observation

For every bar, imagine it as the shortest bar in a rectangle. The rectangle can expand left and right until it hits a smaller bar. The goal is to find the maximum:

```text
height of current bar * width it can safely span
```
