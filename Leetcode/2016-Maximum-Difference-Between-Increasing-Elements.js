/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumDifference = function(nums) {
    let left = 0;
    let max = -1;
    let diff = -1;
    for(let right = 1; right < nums.length; right++){
        if (nums[right] <= nums[left]){
            left = right;
        }else{
            diff = nums[right] - nums[left];
            max = Math.max(max, diff);
        }
        
    }
    return max;

};

// The trick is that whenever right is less than or equal to left, set left === right