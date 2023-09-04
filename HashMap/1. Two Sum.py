#TC: O(N) SC: O(N)

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        obj = {}
        for ind, num in enumerate(nums):
            if (target - num) in obj:
                return [obj[target - num], ind]
            
            else:
                obj[num] = ind