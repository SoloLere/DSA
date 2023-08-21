#TC: O(N) SC: O(N)
class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        dq = collections.deque()
        l, r = len(nums), 0
        for i, val in enumerate(nums):
            while dq and val < nums[dq[-1]]:
                l = min(l, dq[-1])
                dq.pop()
                
            dq.append(i)
            
        dq = collections.deque()
        
        for i in range(len(nums) - 1, -1, -1):
            while dq and nums[i] > nums[dq[-1]]:
                r = max(r, dq[-1])
                dq.pop()
                
            dq.append(i)
            
            
        return r - l + 1 if r - l > 0 else 0