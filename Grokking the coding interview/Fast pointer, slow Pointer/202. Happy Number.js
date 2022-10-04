/**
 *  TC: O(log(N)) SC: O(1)
 */
var isHappy = function(n) {
    let fast = getHappy(getHappy(n));
    let slow = getHappy(n);
    
    while (fast !== slow){
        fast = getHappy(getHappy(fast));
        slow = getHappy(slow)
        
    };
    return fast === 1;
};
    
function getHappy(num){
    // convert num to string
    let nums = num + ''
    let output = 0;
    for(let i = output; i < nums.length; i++){
        output += nums[i]**2;
    }
    return output;
}

// OR 
var isHappy = function(n) {
    let fast = n;
    let slow = n;
    
    while (true){
        fast = getHappy(getHappy(fast));
        slow = getHappy(slow);
        
        if (fast === slow) break
    };
    return fast === 1;
};
   
function getHappy(num){
    let output = 0;
    
    while(num !== 0){
        let lastDigit = num % 10
        output += Math.pow(lastDigit,2);
        num = Math.floor(num / 10);
    }
    
    return output;
}