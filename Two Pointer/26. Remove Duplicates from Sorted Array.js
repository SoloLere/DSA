/*
Two pointer approach
TC: O(N), SC: O(1)
*/

var removeDuplicates = function(nums) {
    let start = 1;
    for(let end = 1; end < nums.length; end++){
        if (nums[end] !== nums[end - 1]){
            nums[start] = nums[end];
            start++
        }
    }
    return start;
};