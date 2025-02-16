class Solution:
    def clearDigits(self, s: str) -> str:
        result = []
        for c in s:
            if c.isdigit():
                if result:
                    result.pop()
            else:
                result.append(c)
                
        return ''.join(result)
    
    
    