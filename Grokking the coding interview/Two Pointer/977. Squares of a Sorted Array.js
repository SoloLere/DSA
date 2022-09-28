/**
 * @param {number[]} nums
 * @return {number[]}
 *  TC: O(N) SC: O(N)
 */
 var sortedSquares = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    let arr = Array(nums.length).fill(0);
    for(let i= nums.length - 1; i >= 0; i--){
        if (nums[r]**2 > nums[l]**2){
            arr[i] = nums[r]**2;
            r--
        }else {
            arr[i] = nums[l]**2;
            l++
        } 
    } 
    return arr;
};