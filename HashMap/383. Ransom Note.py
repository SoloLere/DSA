#TC: O(M+N) SC: O(M+N)
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        objRansom = {}
        objMagazine = {}
         
        for letter in magazine:
            objMagazine[letter] = objMagazine.get(letter, 0) + 1  
            
        for letter in ransomNote:
            objRansom[letter] = objRansom.get(letter, 0) + 1
            if letter not in objMagazine or objRansom[letter] > objMagazine[letter]:
                return False
            
            
        return True
    
#TC: O(M+N) SC: O(N)
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        objMagazine = {}
         
        for letter in magazine:
            objMagazine[letter] = objMagazine.get(letter, 0) + 1  
            
        for letter in ransomNote:
            if letter not in objMagazine or objMagazine[letter] < 1:
                return False
            objMagazine[letter] -= 1
            
            
        return True
                
                