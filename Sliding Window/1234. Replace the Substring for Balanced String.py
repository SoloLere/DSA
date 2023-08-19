# TC: O(N), SC: O(1) {max of 4 elements q,w,e,r}
class Solution:
    def balancedString(self, s: str) -> int:
        obj = collections.Counter(s)
        
        left_pointer, res = 0, len(s)
        ideal_appearance = len(s)/4
        for right_pointer in range(len(s)):
            #decrement frequency
            obj[s[right_pointer]] -= 1

            #only modify res if ideal_appearance is >= all char in obj i.e "q", "w", "e", "r"

            while (left_pointer < len(s) and ideal_appearance >= max(obj.values())):
                res = min(res, right_pointer - left_pointer + 1)
                #shrink window
                obj[s[left_pointer]] += 1
                left_pointer += 1

        return res 
