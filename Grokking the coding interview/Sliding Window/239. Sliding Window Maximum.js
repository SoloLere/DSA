// brute force
// find all possible susstring of length k and look for the max
var maxSlidingWindow = function(nums, k) {
    // sliding window
    // I could create an arr of len 3, insert the first 3 nums in it 
    // look for the min amongst them and push to output
    // arr[nums.length//r] = curr.
    
    let arr = new Array(k).fill(0);
    let output = [];
    let max;

    for (let r = 0; r < nums.length; r++){
        arr[r%k] = nums[r];
        if (r >= k - 1){
            output.push(Math.max(...arr));
        }
        
    }
    return output;
    
};