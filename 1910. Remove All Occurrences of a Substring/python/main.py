class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        if len(s) < len(part):
            return s
        
        start_p = 0
        end_p = len(part) - 1
        
        while (end_p< len(s)):
            sub_str = s[start_p:end_p+1]
            if sub_str == part:
                s = s[:start_p] + s[end_p+1:]
                start_p = max(0, start_p - len(part));
                end_p = max(len(part) - 1, end_p - len(part));
                
            else:
                start_p+=1
                end_p+=1
                
                
        return s
    
    # Using built-in func
    def removeOccurrences2(self, s: str, part: str) -> str:
        while part in s:
            s = s.replace(part, '', 1)
        return s