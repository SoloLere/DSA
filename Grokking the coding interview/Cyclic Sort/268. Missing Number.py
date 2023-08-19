# TC: O(N) SC: O(1)

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        i,ans = 0,len(nums)
        while i < ans:
            if nums[i] == i or nums[i] == len(nums):
                i += 1
            
            else: 
                nums[nums[i]], nums[i] = nums[i], nums[nums[i]]
        
        for i in range(len(nums)):
            if nums[i] != i:
                return i

        return ans

# another approach TC: O(N) SC: O(N)

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        arr = []

        for i in range(len(nums) + 1):
            arr.append(i)

        for num in nums:
            if num in arr:
                arr.remove(num)

        return arr[0]

# another approach TC: O(N) SC: O(1)


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        from functools import reduce
        sum = 0
        
        for i in range(len(nums) + 1):
            sum += i
        return sum - reduce(lambda a, b: a + b, nums)

# another approach TC: O(N) SC: O(1)

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        res = len(nums)

        for i in range(len(nums)):
            res += i - nums[i]
        
        return res