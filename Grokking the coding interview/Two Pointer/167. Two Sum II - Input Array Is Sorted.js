/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
// TC: O(N) SC: O(1)
 */
 var twoSum = function(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        if (arr[l] + arr[r] === target) return [l+1,r+1];
        else if (arr[l] + arr[r] > target) r--;
        else l++
    } 
};