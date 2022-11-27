/*
Brute Force approach
TC: O(N**2), SC: O(1)
*/
var minSubArrayLen = function(target, arr) {
    let min = Infinity;
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = i; j < arr.length; j++){
            sum += arr[j]
            if (sum >= target){
                min = Math.min(min, j - i + 1)
            }
        }
    }
    return min === Infinity ? 0 : min;
};

/*
Sliding window approach
TC: O(N), SC: O(1)
*/
var minSubArrayLen = function(target, arr) {
    let l = 0, min = Infinity, sum = 0;
    for(let r = 0; r < arr.length; r++){
        sum += arr[r]
        while(sum >= target){
            min = Math.min(min, r-l+1);
            sum -= arr[l++]
        }
    }
    return min === Infinity ? 0 : min;
};