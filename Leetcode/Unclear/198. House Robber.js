/*
TC: O(N), SC: O(1)
*/
var rob = function(nums) {
    let first = 0;
    let adjacent = 0;

    for(let i = 0; i < nums.length; i++){
        let sum = Math.max(first + nums[i], adjacent);
        first = adjacent;
        adjacent = sum;
    }
    return adjacent;
};
