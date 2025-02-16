def guess(num: int) -> int:
    # This is a placeholder for the actual guess function
    # The actual implementation will be provided in the problem statement
    return 1

def guessNumber(n: int) -> int:
    low = 1
    high = n
    while low <= high:
        middle = low + (high - low) // 2
        result = guess(middle)
        if result == 0:
            return middle
        elif result == 1:
            low = middle + 1
        else:
            high = middle - 1
            
