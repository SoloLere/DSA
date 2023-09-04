#TC: O(N) SC: O(N)

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)
    

# or the more elaborate form
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        objS, objT = {}, {}
        
        if len(s) != len(t):
            return False
        
        for letter in s:
            objS[letter] = objS.get(letter, 0) + 1
            
        for letter in t:
            objT[letter] = objT.get(letter, 0) + 1
            
        for char in objS:
            if char not in objT or objS[char] != objT[char]:
                return False
            
        return True
    
#TC: O(N) SC: O(1)
class Solution:
  def isAnagram(self, s: str, t: str) -> bool:
      arr = [0] * 26
      
      if len(s) != len(t):
          return False
      
      for i in range(len(s)):
          arr[ord(s[i]) - ord("a")] += 1
          arr[ord(t[i]) - ord("a")] -= 1
          
      for i in arr:
          if i != 0:
              return False
          
      return True
    
