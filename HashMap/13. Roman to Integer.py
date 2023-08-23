#TC: O(N) SC: O(N)

class Solution:
    def romanToInt(self, s: str) -> int:
        obj = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        i = 0
        res = 0
        
        while i < len(s):
            if i + 1 < len(s) and obj[s[i + 1]] > obj[s[i]]:
                res += obj[s[i + 1]] - obj[s[i]]
                i += 2
                
            else:
                res += obj[s[i]]
                i += 1
                
        return res
    
# Alternative

class Solution:
    def romanToInt(self, s: str) -> int:
        obj = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        res = 0
        prevNumeral = 0
        
        for numeral in s[::-1]:
            if obj[numeral] >= prevNumeral:
                res += obj[numeral]
                
            else:
                res -= obj[numeral]
            prevNumeral = obj[numeral]
                
        return res