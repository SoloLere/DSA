/*
Brute Force approach
find all possible substring with sum === target
TC: O(N**2), SC: O(1)
*/

var twoSum = function(nums, target) {
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};


/*
TC: O(N), SC: O(N)
*/
var twoSum = function(nums, target) {
    let obj = {};
    
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        
        if (diff in obj) return [obj[diff], i];
        
        obj[nums[i]] = i;
    }
};