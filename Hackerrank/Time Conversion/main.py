import math
import os
import random
import re
import sys

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s: str) -> str:
    # Write your code here
    if s.endswith('AM'):
        if s[:2] == '12':
            return '00' + s[2:-2]
        return s[:-2]
    else:
        if s[:2] == '12':
            return s[:-2]
        return str(int(s[:2]) + 12) + s[2:-2]

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()
