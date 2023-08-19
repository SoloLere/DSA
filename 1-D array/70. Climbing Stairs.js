// Top Down DP - memoization (TC:O(N),SC:O(N))
const climbStairs = (n) => {
    const memo = new Map();
    
    return climbStairsMemo(n, memo);
};

const climbStairsMemo = (n, memo) => {
    if(n <= 2) return n;
    if(!memo.has(n)) {
        memo.set(n, climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo))
    }
    
    return memo.get(n);
};

// Bottom Up DP - iterative approach (TC:O(N),SC:O(N))
var climbStairs = function(n) {
    let arr = new Array(n + 1);
    arr[n]= 1;
    arr[n-1] = 1;
    for (let i = n - 2; i >= 0; i--){
        arr[i] = arr[i + 1] + arr[i + 2];
    }
    
    return arr[0]
}

// Bottom Up DP - optimized - reduce space complexity to O(1)
var climbStairs = function(n) {
    let one = 1;
    let two = 1;
    
    for (let i = 0; i < n - 1; i++){
        let temp = one;
        one = two;
        two = temp + two;
    }
    
    return two
};