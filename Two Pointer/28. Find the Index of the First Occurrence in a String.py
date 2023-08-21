#TC: O(N * M) where N is len of haystack and M is len of needle, SC: O(1)
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        
        for i in range(len(haystack) - len(needle) + 1):
            if haystack[i] == needle[0]:
                for j in range(len(needle)):
                    if haystack[j + i] != needle[j]:
                        break
                    if j == len(needle) - 1:
                        return i           
            
        return -1
                