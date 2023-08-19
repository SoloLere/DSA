/*brute force
 find all possible susstring of length k and look for the max
TC: O(N-k+1 * k), SC: O(N)
*/
var maxSlidingWindow = function(nums, k) {
    // brute force
    // find all possible susstring of length k and look for the max
    let res = []; 
    for(let i = 0; i < nums.length - k + 1; i++){
        let max = nums[i]
        
        for(let j = i + 1; j < i + k; j++){
            max = Math.max(max, nums[j])
        }
        
        res.push(max)
    }
    
    return res
    
};

// sliding window
// I could create an arr of len 3, insert the first 3 nums in it 
// look for the min amongst them and push to output
// arr[nums.length//r] = curr.
var maxSlidingWindow = function(nums, k) {
    
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

/* Using monotonic queue
TC: O(N), SC: O(N)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // monotonic que
    let q = [];
    
    // output
    let res = [];
    
    // Iterate through all window positions
    for(let i = 1 - k, j = 0; j < nums.length; j++, i++){
        // Make sure q will stay in descending order after adding new window el
        while(q.length && nums[j] > q[q.length - 1]) q.pop();
        
        // Add new window el to q, gauranteed to be smallest in q or the only one
        q.push(nums[j]);
        
        // If window isn't fully overlapping nums, don't yet know the first max
        if (i < 0)continue;
        
        // Add q[0] to output, since it's current largest el in window
        res.push(q[0])
        
        // If biggest el in q is in the first index and about to exit window, remove it from q
        if (q[0] === nums[i]) q.shift();
    }
    
    return res
    
};