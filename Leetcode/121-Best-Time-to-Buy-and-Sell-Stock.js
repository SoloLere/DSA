/**
 * @param {number[]} prices
 * @return {number}
 * // TC: O(N) SC: O(1)
 */
 var maxProfit = function(prices) {
    // I buy low sell high
    let left = 0;
    let diff = 0;
    let max = 0;
    for(let right = 1; right < prices.length; right++){
        if (prices[right] <= prices[left]){
            left = right
        }else {
            diff = prices[right] - prices[left];
            max = Math.max(diff, max)
        }

    }
    return max;
};

/**
 * @param {number[]} prices
 * @return {number}
 * // TC: O(N) SC: O(1)
 */
 var maxProfit = function(arr) {
    let profit = 0;
    let lowest = arr[0];
    for (let i=1;i < arr.length; i++) {
        if (arr[i] < lowest) lowest = arr[i];
        profit = Math.max(profit, arr[i] - lowest) 
    } 
 
    return profit;
};


// console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));