// Bottom Up DP - optimized - reduce space complexity to O(1)
var minCostClimbingStairs = function(cost) {
    cost.push(0)
    let ult = cost[cost.length -1];
    let pen_ult = cost[cost.length - 2];
    
    for(let i = cost.length - 3; i >= 0; i--){
        let temp = pen_ult;
        cost[i] = cost[i] + Math.min(ult, pen_ult);
        pen_ult = cost[i];
        ult = temp;
    }
    return Math.min(pen_ult, ult)
};

// Bottom Up DP - iterative approach (TC:O(N),SC:O(1))
var minCostClimbingStairs = function(cost) {
    cost.push(0)
    for(let i = cost.length - 3; i >= 0; i--){
        cost[i] = cost[i] + Math.min(cost[i + 1], cost[i + 2]);
    }
    return Math.min(cost[0], cost[1])
};

// Top Down DP - memoization (TC:O(N),SC:O(N))
var minCostClimbingStairs = function(cost) {
    var finder = function(num){
        if (num >= cost.length) return 0;
 
        if(!memo.has(num)){
            memo.set(num, cost[num] + Math.min(finder(num + 1), finder(num + 2)));
        }

        return memo.get(num)
    }
    let memo = new Map();
    return Math.min(finder(0), finder(1));
};