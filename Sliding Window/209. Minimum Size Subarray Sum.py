# TC: O(N), SC: O(1)
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        res, l, k = float("inf"), 0, target
        
        for r in range(len(nums)):
            k -= nums[r]
            while k <= 0: #shrink window
                res = min(res, r - l + 1)
                k += nums[l]
                l += 1
                
        return res if res != float('inf') else 0