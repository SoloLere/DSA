class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        length = len(nums)
        def dfs(combination, ind, memo = {}):
            if (combination,ind) in memo:
                return memo[(combination,ind)]
            if ind == length and combination != target:
                return 0
            if ind == length and combination == target:
                return 1
            
            count = 0
            count += dfs(combination + nums[ind], ind + 1, memo)
            count += dfs(combination - nums[ind], ind + 1, memo)
            
            memo[(combination,ind)] = count
            return memo[(combination,ind)]
            
        return dfs(0, 0)