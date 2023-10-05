#TC: O(N) SC: O(1)

class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        res = 0
        l = 0
        
        for i in range(len(nums)):
            if nums[i] != 1:
                k -= 1
                
            while k < 0:
                if nums[l] != 1:
                    k += 1
                l += 1
            res = max(res, i - l + 1)
            
        return res