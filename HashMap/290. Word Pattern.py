#TC: O(N) SC: O(N)

class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        arr = s.split(" ")
        if len(arr) != len(pattern):
            return False
        
        objPS, objSP = {}, {}
        for cP, cS in zip(arr, pattern):
            if (cP in objPS and objPS[cP] != cS) or (cS in objSP and objSP[cS] != cP):
                return False
            
            objPS[cP] = cS
            objSP[cS] = cP
            
        return True