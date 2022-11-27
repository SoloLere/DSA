/*
Brute Force approach
TC: O(N**2), SC: O(1)
*/

var maxSubArray = function(nums) {
    let max = -Infinity;
    for (let i = 0; i< nums.length; i++){
        let sum = 0;
        for(let j = i; j< nums.length; j++){
            sum+=nums[j];
            max = Math.max(max, sum);
        }
    }
    return max;
};

/*
Sliding window approach
TC: O(N), SC: O(1)

// always shifting the left window if sum < 0
*/

var maxSubArray = function(nums) {
    let sum = nums[0], max = nums[0];
    let left = 0;
    for (let i = 1; i< nums.length; i++){
        if (sum <  0) {
            sum = 0
        }
        sum += nums[i];
        max = Math.max(sum, max);
    }
    return max;
};

var maxSubArray = function(nums) {
    let sum = nums[0], max = nums[0];
    let left = 0;
    for (let i = 1; i< nums.length; i++){
        sum  = Math.max(sum + nums[i], nums[i]);
        max = Math.max(sum, max);
    }
    return max;
};