#TC: O(N) SC: O(N)

class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        objST, objTS  = {}, {}
        
        for cS, cT in zip(s, t):
            if ((cS in objST and objST[cS] != cT) or
               (cT in objTS and objTS[cT] != cS)):
                return False
            
            objST[cS] = cT
            objTS[cT] = cS
            
        return True