#TC: O(N) SC: O(1)

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        length = 0
        """another approach
        r = len(s) - 1
        
        while s[r] == " ":
            r -= 1
            
        for i in range(r, -1, -1):
            if s[i] != " ":
                length += 1
                
            else:
                break
        """

        for i in range(len(s) - 1, -1, -1):
            if s[i] != " ":
                length += 1
            else:
                if length > 0:
                    return length
            
        return length
        