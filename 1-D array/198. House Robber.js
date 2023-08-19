// Top Down DP - memoization (TC:O(N),SC:O(N))

var rob = function(nums) {
    let memo = new Map();
    var robb = function(num){
        if (num >= nums.length) return 0;
        if (!memo.has(num)){
            memo.set(num, Math.max(nums[num] + robb(num + 2), robb(num+1)))
        }
        return memo.get(num)
    }
    
    return robb(0);
};

// Bottom Up DP - optimized - reduce space complexity to O(1)

var rob = function(nums) {
    let left = 0;
    let right = 0;
    
    for(let i = 0; i < nums.length; i++){
        let temp = Math.max(left + nums[i], right);
        left = right;
        right = temp;
    }
    
    return right;
};