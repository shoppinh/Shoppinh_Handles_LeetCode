**Game Description**

I pick a number from 1 to n. Your task is to guess which number I picked.

**Feedback Mechanism**

Every time you make a guess, I will provide feedback indicating whether the number I picked is higher or lower than your guess.

**API Description**

You can use a pre-defined API `int guess(int num)` to make your guesses. This API returns one of three possible results:

* `-1`: Your guess is higher than the number I picked (i.e., `num > pick`).
* `1`: Your guess is lower than the number I picked (i.e., `num < pick`).
* `0`: Your guess is equal to the number I picked (i.e., `num == pick`).

**Goal**

Your goal is to return the number that I picked.

**Examples**

**Example 1**

* Input: `n = 10`, `pick = 6`
* Output: `6`

**Example 2**

* Input: `n = 1`, `pick = 1`
* Output: `1`

**Example 3**

* Input: `n = 2`, `pick = 1`
* Output: `1`

**Constraints**

* `1 <= n <= 2^31 - 1`
* `1 <= pick <= n`