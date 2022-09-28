/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *  TC: O(N^2 + NlogN) SC: O(N) => because of sorting
 */
 var threeSumClosest = function(nums, target) {
    let diff = Infinity;
    let arr = nums.sort((a,b) => a-b) ;
    for (let i = 0; i < arr.length; i++) {
        let l = i + 1;
        let r = arr.length - 1;
        while (l < r){
            let sum = arr[i] + arr[l] + arr[r];
            if (Math.abs(sum - target) < Math.abs(diff)) diff = sum - target;
            
            if (sum === target) {
                return sum
                
            }
           
            else if (sum < target) l++;
            else r--;
        }
     
    }
    return target + diff;
};