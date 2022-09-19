var maxProfit = function(prices) {
    // Brute for approach
    // get all possible differences and return the max
    // TC: O(N^2) : Outer loop processes each price, while inner loop processess each price N times
    // SC: O(1)
    
    let maxProfit = -Infinity;
    for (let left = 0; left < prices.length; left++){
        for (let right = left; right < prices.length; right++){
            maxProfit = Math.max(maxProfit, prices[right] - prices[left])
        }
    }
    return maxProfit;
};

var maxProfit = function(prices) {
    // Optimized approach
    // TC: O(N^2) : Outer loop processes each price, while inner loop processess each price N times(worst case)
    // SC: O(1)
    
    let maxProfit = 0;
    let prev = Infinity;
    for (let left = 0; left < prices.length; left++){
        if (prev > prices[left]){
            prev = prices[left];
            let right  = left + 1;
            while(right < prices.length){
                maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
                right++;
            }
        }
        else{
            continue;
        }
    }
    return maxProfit;
};

var maxProfit = function(prices) {
    // Optimized approach
    // TC: O(N) : Outer loop processes each price
    // SC: O(1)
    
    let maxProfit = 0;
    let lowest = 0;
    for (let current = 0; current < prices.length; current++){
        if (prices[lowest] < prices[current]){
            maxProfit = Math.max(maxProfit, prices[current] - prices[lowest]);
        }
        else{
            lowest = current;
        }
    }
    return maxProfit;
};