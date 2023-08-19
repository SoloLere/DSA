# TC: O(N), SC: O(1)
class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        return self.atMost(nums, goal) - self.atMost(nums, goal - 1)
    
    def atMost(self, nums, goal):
        
        # verify goal
        if goal < 0:
            return 0
        l, res = 0, 0
        for r in range(len(nums)):
            goal -= nums[r]
            
            while goal < 0: #shrink window
                goal += nums[l]
                l += 1
                
            res += r - l + 1
            
        return res
        
        
                
            