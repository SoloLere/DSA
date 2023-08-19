# TC: O(N + M) = O(N) SC: O(M)

class Solution:
    def firstUniqChar(self, s: str) -> int:
        obj = {}
        for i in range(len(s)):
            char = s[i]
            if char not in obj:
                obj[char] = 1
            else:
                obj[char] += 1

        for char in obj:
            if obj[char] == 1: 
                return s.index(char)

        return -1

# TC: O(M + M) = O(M) SC: O(M)

class Solution:
    def firstUniqChar(self, s: str) -> int:
        _set = set(())
        for i in range(len(s)):
            if s[i] in _set: continue
            _set.add(s[i])
            repeat = False
            for j in range(i+1, len(s)):
                if s[i] == s[j]:
                    repeat = True
                    break
            
            if repeat == False:
                return i

        return -1