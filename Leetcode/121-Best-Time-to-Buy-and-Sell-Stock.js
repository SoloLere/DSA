/**
 * @param {number[]} prices
 * @return {number}
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


// console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));