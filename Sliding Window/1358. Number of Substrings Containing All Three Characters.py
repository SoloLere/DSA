#TC: O(N) SC: O(1)
'''
For people who can't understand res+=i
res += i
This is the best line ever

a a a b b c c a b c
when all a, b, c > 0 for first time at j = 5 the n after while loop i will be at i = 3, we will add 3 to result because there would be three substrings from three a's.

Then a,b,c > 0 at j = 7 ,then we will move i until i = 5 then we will add 5 to result because there could be 5 substrings starting from 0 to second b.

And similarly we proceed....
'''

class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        obj = {c: 0 for c in "abc"}
        res = 0
        l = 0
        
        for i in range(len(s)):
            obj[s[i]] += 1
            
            while all(num > 0 for num in obj.values()):
                obj[s[l]] -= 1
                l += 1
                
            res += l
            
        return res