"""The solution I came up with

TC: O(N * M * X) SC: O(N)
where N is the len of nums array, M is the len of obj values with len > 2 and X is the average len of such values.

"""
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        obj = {}
        for i in range(len(nums)):
            num = nums[i]
            obj[num] = obj.get(num, []) + [i]
                 
        
        for val in obj.values():
            if len(val) > 1:
                length = len(val)
                l = 0
                r = 1
                
                while r < length:
                    if abs(val[l] - val[r]) <= k:
                        return True
                    else:
                        l += 1
                        r += 1
            
        return False
    
#TC: O(N) SC: O(N)

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        obj = {}
        
        for i in range(len(nums)):
            num = nums[i]
            
            if (num in obj and abs(obj[num] - i) <= k):
                return True
            
            obj[num] = i
            
        return False
    

"""
Optimized Solution
#TC: O(N) SC: O(K)


pre-populate the window with the k first elements, then not have to perform the check on each iteration to see if its in the window of the previous k elements.


"""

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        seen = set()
        
        for i in range(len(nums)):
            num = nums[i]
            if num in seen:
                return True
                        
            seen.add(num)

            if i >= k:
                seen.remove(nums[i - k])
                
            
        return False